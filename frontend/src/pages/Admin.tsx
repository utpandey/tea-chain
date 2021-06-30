import React, { FC, useState, useEffect, MouseEvent, useRef } from "react";
import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";
import QRcode from "qrcode.react"
import { AddBatch } from "src/store/batch";

import Role from "../components/Role";
import {
  FarmerModal,
  ManufactureModal,
  DistributerModal,
  RetailModal,
  WholesaleModal,
} from "../components/Modals";
import Teachain from "../artifacts/contracts/Teachain.sol/Teachain.json";
import { getBatchStateReducer } from "../store/batch";
import { getUserTypeReducer } from "../store/auth";


import user from "../assets/user.svg";
import documentImg from "../assets/document.svg";
import Batches from "src/components/Batches";
import config from "../config";

import code from "../assets/code.png";
import download from "../assets/download.png";

declare global {
  /* tslint:disable */
  interface Window {
    ethereum: any;
  }
}

const teachainAddress = config.contractAddress || '';

const Admin: FC = () => {
  const [teachain, setTeachainValue] = useState<any>([]);
  const [batchNo, setBatchNo] = useState<any>();
  const batchState = useSelector(getBatchStateReducer);
  const userRole = useSelector(getUserTypeReducer);
  const [showModal, setModal] = useState<boolean>(false);
  const elementsRef = useRef([]);
  const dispatch = useDispatch();
  // console.log(userRole === 'Manufacturer')
  useEffect(() => {
    fetchTeachain();
  }, []);

  const downloadQrCode =(e: MouseEvent<HTMLImageElement, any>, batchId: number)=> {
    const elementId = 'ref_qr_' + batchId;
    const canvas = document.getElementById(elementId) as HTMLCanvasElement;
    const pngUrl = canvas?.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = elementId;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const qrCodeStyle = {
    display: "none"
  }

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
        const ownerAddress = await signer.getAddress()
        const data = await contract.functions.getBatches(ownerAddress);
        const response = await data[0];
        // console.log(response);
        setTeachainValue(response);
        console.log(response)

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
  async function setTeachain() {
    // if (!teachain) return
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        teachainAddress,
        Teachain.abi,
        signer
      );
      const transaction = await contract.functions.createBatch();
      await transaction.wait();
      contract.on("BatchCreated", async (res) => {
        const num = res.toNumber();
        const transactionTwo = await contract.functions.updateFarmerEntry(
          num,
          "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
          "Jack",
          "Camellia sinensis",
          "Darjeeling",
          Math.round(new Date().getTime() / 10000),
          1
        );
        await transactionTwo.wait();
      });
      console.log(transaction);
      // fetchTeachain()
    }
  }

  async function updateManufcturerEntry() {
    // if (!teachain) return
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        teachainAddress,
        Teachain.abi,
        signer
      );
      // const transaction = await contract.functions.createBatch()
      const transactionTwo = await contract.functions.updateManufcturerEntry(
        596,
        "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
        "Jill",
        "Green Tea",
        Math.round(new Date().getTime()),
        "16"
      );
      await transactionTwo.wait();
      console.log(transactionTwo);
      // fetchTeachain()
    }
  }

  async function updateWholesalerEntry() {
    // if (!teachain) return
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        teachainAddress,
        Teachain.abi,
        signer
      );
      // const transaction = await contract.functions.createBatch()
      const transactionTwo = await contract.functions.updateWholesalerEntry(
        596,
        "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
        "Jerry",
        Math.round(new Date().getTime() / 10000)
      );
      await transactionTwo.wait();
      console.log(transactionTwo);
      // fetchTeachain()
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
                            <h1 className="batch__cont--id" onClick={handleClick}>{batchId}</h1>
                            <div className="batch__cont__img">
                              <QRcode 
                                id={`ref_qr_${batchId}`}
                                value={"http://localhost:3000/status/" + batchId}
                                style={qrCodeStyle}
                              />
                              <img
                                src={code}
                                alt="Qr Code"
                                onClick={(e) => downloadQrCode(e, batchId)}
                                className="batch__cont__img--item"
                              />
                              <img
                                src={download}
                                alt="Download"
                                className="batch__cont__img--item"
                              />
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
        />
      )}
      {userRole === "Manufacturer" && (
        <ManufactureModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
        />
      )}
      {userRole === "Wholesaler" && (
        <WholesaleModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
        />
      )}
      {userRole === "Distributer" && (
        <DistributerModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
        />
      )}
      {userRole === "Retailer" && (
        <RetailModal
          showModal={showModal}
          setModal={setModal}
          fetchTeachain={fetchTeachain}
        />
      )}

      {/* <button onClick={fetchTeachain}>Click</button>
			<button onClick={updateManufcturerEntry}>Click</button>
			<button onClick={updateWholesalerEntry}>Click</button> */}
    </div>
  );
};

export default Admin;

// console.log(obj[i][obj[i].length-1]) to get isUpdate

// return (
//   <>
//     <div className="table-row" key={index}>
//       {/* <div className="table-data">{id++}</div> */}
//       {/* <div className="table-data">{data.email}</div>
//       <div className="table-data">{data.firstName}</div>
//       <div className="table-data">{data.lastName}</div>
//       <div className="table-data">{data.gender}</div>
//       <div className="table-data">{data.phone}</div>
//       <div className="table-data">{data.purpose}</div>
//       <div className="table-data">{data.address}</div> */}
//     </div>
//   </>
// );

{
  /* {visitors.map((data, index) => (
                <div className="table-row" key={index}>
                  <div className="table-data">{id++}</div>
                  <div className="table-data">{data.email}</div>
                  <div className="table-data">{data.firstName}</div>
                  <div className="table-data">{data.lastName}</div>
                  <div className="table-data">{data.gender}</div>
                  <div className="table-data">{data.phone}</div>
                  <div className="table-data">{data.purpose}</div>
                  <div className="table-data">{data.address}</div>
                  <div className="table-data">
                    {data.vaccinated ? "Done" : "Not Yet"}
                  </div>
                  <div className="table-data">
                    {data.inTime.hr}:{data.inTime.min}
                  </div>
                </div>
              ))} */
}
