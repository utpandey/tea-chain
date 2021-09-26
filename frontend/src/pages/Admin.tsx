import { FC, useState, useEffect, MouseEvent } from "react";
import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";
import QRcode from "qrcode.react";
import { AddBatch } from "src/store/batch";

import Role from "../components/Role";
import {
  FarmerModal,
  ManufactureModal,
  DistributerModal,
  RetailModal,
  WholesaleModal,
  LoaderModal,
} from "../components/Modals";
import Teachain from "../artifacts/contracts/Teachain.sol/Teachain.json";
import { getBatchStateReducer } from "../store/batch";
import { getUserTypeReducer } from "../store/auth";

import user from "../assets/user.svg";
import documentImg from "../assets/document.svg";
// import Batches from "src/components/Batches";
import config from "../config";

import code from "../assets/code.png";
// import download from "../assets/download.png";
import Snackbar from "src/components/Snackbar";

declare global {
  /* tslint:disable */
  interface Window {
    ethereum: any;
  }
}

const teachainAddress = config.contractAddress || "";

const Admin: FC = () => {
  const [teachain, setTeachainValue] = useState<any>([]);
  const [batchNo, setBatchNo] = useState<any>();
  const batchState = useSelector(getBatchStateReducer);
  const userRole = useSelector(getUserTypeReducer);
  const [showModal, setModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const dispatch = useDispatch();
  // console.log(userRole === 'Manufacturer')
  useEffect(() => {
    fetchTeachain();
  }, []);

  const clearError = () => {
    setError({
      isError: false,
      errorMessage: "",
    });
  };

  const downloadQrCode = (
    e: MouseEvent<HTMLImageElement, any>,
    batchId: number
  ) => {
    const elementId = "ref_qr_" + batchId;
    const canvas = document.getElementById(elementId) as HTMLCanvasElement;
    const pngUrl = canvas
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = elementId;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const qrCodeStyle = {
    display: "none",
  };

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchTeachain() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        teachainAddress,
        Teachain.abi,
        provider
      );
      try {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const ownerAddress = await signer.getAddress();
        const data = await contract.functions.getBatches(ownerAddress);
        const response = await data[0];
        // console.log(response);
        setTeachainValue(response);
        console.log(response);

        setBatchNo(data[0].length);

        if (response.length > 0) {
          console.log(response);
          setTeachainValue(response);
          console.log(teachain);
        }
        // for (let i = 0; i < obj.length; i++) {
        //   console.log(obj[i].length)
        // }
        // for (let i = 0; i < data[0][2].length; i++){
        //   console.log(obj[i])
        //   // console.log(obj[i][obj[i].length-1])
        // }
        // let a = data[0][0][2][3].toNumber()
        // console.log(new Date(a))
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  return (
    <div className="admin__cont">
      <h1 className="admin__cont__title">Dashboard</h1>
      <hr />
      <div className="admin__cont__infoCont">
        <div className="admin__cont__infoCont__rolesCont">
          <h1 className="admin__cont__infoCont__rolesCont__title">
            Total Roles
          </h1>
          <div className="admin__cont__infoCont__rolesCont__content">
            <img
              src={user}
              alt=""
              className="admin__cont__infoCont__rolesCont__content__img"
            />
            <h1 className="admin__cont__infoCont__rolesCont__content__value">
              5
            </h1>
          </div>
        </div>
        <div className="admin__cont__infoCont__rolesCont">
          <h1 className="admin__cont__infoCont__rolesCont__title">
            Total Batches
          </h1>
          <div className="admin__cont__infoCont__rolesCont__content">
            <img
              src={documentImg}
              alt=""
              className="admin__cont__infoCont__rolesCont__content__img"
            />
            <h1 className="admin__cont__infoCont__rolesCont__content__value">
              {batchNo}
            </h1>
          </div>
        </div>
      </div>
      <div className="admin__cont__batchCont">
        <div className="admin__cont__batchCont__header">
          <h1 className="admin__cont__batchCont__header__title">
            BATCHES OVERVIEW
          </h1>
          {/* // @ts-ignore */}
          {userRole === "Farmer" ? (
            <button
              className="admin__cont__batchCont__header__btn"
              onClick={() => setModal((prevValue) => !prevValue)}
            >
              Create Batch
            </button>
          ) : (
            <button
              className="admin__cont__batchCont__header__btn"
              onClick={() => setModal((prevValue) => !prevValue)}
            >
              Update Batch
            </button>
          )}
        </div>
        <hr />
        <div className="table__cont">
          <div className="table">
            <div className="table-header">
              <div className="header__item">
                <a id="id" className="filter__link " href="#">
                  Batch ID
                </a>
              </div>
              <div className="header__item">
                <a id="name" className="filter__link " href="#">
                  Farm Inpsector
                </a>
              </div>
              <div className="header__item">
                <a
                  id="wins"
                  className="filter__link filter__link--number"
                  href="#"
                >
                  Manufacturer
                </a>
              </div>
              <div className="header__item">
                <a
                  id="wins"
                  className="filter__link filter__link--number"
                  href="#"
                >
                  Wholesaler
                </a>
              </div>
              <div className="header__item">
                <a
                  id="wins"
                  className="filter__link filter__link--number"
                  href="#"
                >
                  Distributor
                </a>
              </div>
              <div className="header__item">
                <a
                  id="wins"
                  className="filter__link filter__link--number"
                  href="#"
                >
                  Retailer
                </a>
              </div>
            </div>
            <div className="table-content">
              {teachain.length > 0
                ? teachain.map((mainChainData: any, index: any) => {
                    if (mainChainData.length > 2) {
                      console.log(mainChainData);
                      const batchId = parseInt(mainChainData[0]._hex, 16);
                      const handleClick = () => {
                        console.log(mainChainData);
                        dispatch(AddBatch({ batchData: mainChainData }));
                      };
                      return (
                        <div className="table-row" key={index}>
                          <div className="table-data batch__cont">
                            <h1
                              className="batch__cont--id"
                              onClick={handleClick}
                            >
                              {batchId}
                            </h1>
                            <div className="batch__cont__img">
                              <QRcode
                                id={`ref_qr_${batchId}`}
                                value={
                                  "http://localhost:3000/status/" + batchId
                                }
                                style={qrCodeStyle}
                              />
                              <img
                                src={code}
                                alt="Qr Code"
                                onClick={(e) => downloadQrCode(e, batchId)}
                                className="batch__cont__img--item"
                              />
                              {/* <img
                                src={download}
                                alt="Download"
                                className="batch__cont__img--item"
                              /> */}
                            </div>
                          </div>

                          {mainChainData.map((secondData: any, index: any) => {
                            const bool =
                              mainChainData[
                                mainChainData.indexOf(secondData) - 1
                              ]?.isVerified;
                            console.log(bool);
                            return secondData.length > 2 ? (
                              <>
                                {secondData[secondData.length - 1] === false ? (
                                  bool ? (
                                    <button className=" box2__title3">
                                      Processing
                                    </button>
                                  ) : (
                                    <button className="  box2__title2">
                                      Not Available
                                    </button>
                                  )
                                ) : (
                                  <button className=" box2__title1">
                                    Completed
                                  </button>
                                )}
                              </>
                            ) : null;
                          })}
                        </div>
                      );
                    }
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
      <div className="admin__cont__horizCont">
        {batchState
          ? batchState.map((data: any, index: any) => {
              if (data.length > 2) {
                return <Role data={data} index={index} key={index} />;
              }
            })
          : null}
      </div>
      {userRole === "Farmer" && (
        <FarmerModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />
      )}
      {userRole === "Manufacturer" && (
        <ManufactureModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />
      )}
      {userRole === "Wholesaler" && (
        <WholesaleModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />
      )}
      {userRole === "Distributer" && (
        <DistributerModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />
      )}
      {userRole === "Retailer" && (
        <RetailModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />
      )}
      {loading ? <LoaderModal /> : null}
      {error.isError && (
        <Snackbar
          status="error"
          message={error.errorMessage}
          clearError={clearError}
        />
      )}
      {/* <button onClick={fetchTeachain}>Click</button>
			<button onClick={updateManufcturerEntry}>Click</button>
			<button onClick={updateWholesalerEntry}>Click</button> */}
    </div>
  );
};

export default Admin;
