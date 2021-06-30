import React, { FC } from "react";
import { Button, Card, FormControl, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { AddBatch } from "src/store/batch";

import code from "../assets/code.png";
import download from "../assets/download.png";

interface IBatchesProps {
  data: any;
}

const Batches: FC<IBatchesProps> = ({ data }) => {
  const q = parseInt(data[0]._hex, 16);
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(data);
    dispatch(AddBatch({ batchData: data }));
  };
  return (
    // <div className="box1">
    //   <div className="box1__batchDetail">
    //     <h1 className="box1__batchDetail__title" onClick={handleClick}>
    //       {q}
    //     </h1>
    //     <img src={code} alt="Qr Code" className="box1__batchDetail__icon" />
    //     <img src={download} alt="Qr Code" className="box1__batchDetail__icon" />
    //   </div>
    //   <div className="box1__item">
    //     {data.map((batchData: any, key: any) => {
    //       if (batchData.length > 2) {
    //         const bool = data[data.indexOf(batchData) - 1].isVerified;
    //         return (
    //           <BatchComponent batchData={batchData} key={key} bool={bool} />
    //         );
    //       }
    //     })}
    //   </div>
    // </div>
    <div className="table__cont">
      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a id="id" className="filter__link " href="#">
              ID
            </a>
          </div>
          <div className="header__item">
            <a id="name" className="filter__link " href="#">
              Email
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              First Name
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Last Name
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Gender
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Phone
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Purpose
            </a>
          </div>
          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              Address
            </a>
          </div>
          <div className="header__item">
            <a
              id="losses"
              className="filter__link filter__link--number"
              href="#"
            >
              Vaccinated
            </a>
          </div>
          <div className="header__item">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              Visiting Time
            </a>
          </div>
        </div>
        <div className="table-content">
          {data.map((batchData: any, key: any) => {
            if (batchData.length > 2) {
              const bool = data[data.indexOf(batchData) - 1].isVerified;
              return (
                <>
                  <div className="table-row" key={key}>
                    <div className="table-data" onClick={handleClick}>
                      {q}
                    </div>
                    <img src={code} alt="Qr Code" className="table-data" />
                    <img src={download} alt="Qr Code" className="table-data" />
                    {batchData[batchData.length - 1] === false ? (
                      bool ? (
                        <button className="table-data box2__title3">
                          Processing
                        </button>
                      ) : (
                        <button className="table-data box2__title2">
                          Not Available
                        </button>
                      )
                    ) : (
                      <button className="box2__title1">Completed</button>
                    )}
                    {/* <div className="table-data">{data.email}</div>
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
                  </div> */}
                  </div>
                  {/* <BatchComponent batchData={batchData} key={key} bool={bool} /> */}
                </>
              );
            }
          })}
          {/* {visitors.map((data, index) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Batches;

interface IBatchComponentProps {
  batchData: any;
  bool: boolean;
}

const BatchComponent: FC<IBatchComponentProps> = ({ batchData, bool }) => {
  return (
    <div className="box2">
      {batchData[batchData.length - 1] === false ? (
        bool ? (
          <button className="box2__title3">Processing</button>
        ) : (
          <button className="box2__title2">Not Available</button>
        )
      ) : (
        <button className="box2__title1">Completed</button>
      )}
    </div>
  );
};
