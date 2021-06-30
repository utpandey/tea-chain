import React, { FC, useState, useEffect } from "react";
import { ethers } from "ethers";
import StatusCard from "src/components/StatusCard";
import axios from "../utils/axios";
import { useParams } from "react-router";

declare global {
  /* tslint:disable */
  interface Window {
    ethereum: any;
  }
}

const dataArray = [
  { _hex: "0x00", _isBigNumber: true },
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    "",
    "",
    { _hex: "0x00", _isBigNumber: true },
    0,
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // farmerAddress:
    "", // farmerName:
    "", // teaSpecies:
    "", //teaLocation:
    { _hex: "0x00", _isBigNumber: true }, // harvestingDate:
    0, // flushNumber:
    false, // isVerified:
  ],
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    "",
    { _hex: "0x00", _isBigNumber: true },
    { _hex: "0x00", _isBigNumber: true },
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // manufacturerAddress:
    "", //  manufacturerName:
    "", // teaType:
    { _hex: "0x00", _isBigNumber: true }, // receivingDate: BigNumber
    { _hex: "0x00", _isBigNumber: true }, // witheringDuration: BigNumber
    false, // isVerified:
  ],
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    { _hex: "0x00", _isBigNumber: true },
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // wholesalerAddress:
    "", // wholesalerName:
    { _hex: "0x00", _isBigNumber: true }, // receivingDate: BigNumber
    false, // isVerified:
  ],
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    { _hex: "0x00", _isBigNumber: true },
    0,
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", //distributerAddress:
    "", // distributerName:
    { _hex: "0x00", _isBigNumber: true }, // receivingDate: BigNumber
    0, // storageTemperature:
    false, // isVerified:
  ],
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    { _hex: "0x00", _isBigNumber: true },
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // retailerAddress:
    "", // retailerName:
    { _hex: "0x00", _isBigNumber: true }, // receivingDate: BigNumber
    false, // isVerified:
  ],
  { _hex: "0x00", _isBigNumber: true }, // batchId: BigNumber
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    "",
    "",
    { _hex: "0x00", _isBigNumber: true },
    0,
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // farmerAddress:
    "", // farmerName:
    "", // teaSpecies:
    "", //teaLocation:
    { _hex: "0x00", _isBigNumber: true }, // harvestingDate:
    0, // flushNumber:
    false, // isVerified:
  ],
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    "",
    { _hex: "0x00", _isBigNumber: true },
    { _hex: "0x00", _isBigNumber: true },
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // manufacturerAddress:
    "", // manufacturerName:
    "", // teaType:
    { _hex: "0x00", _isBigNumber: true }, // receivingDate: BigNumber
    { _hex: "0x00", _isBigNumber: true }, // witheringDuration: BigNumber
    false, // isVerified:
  ],
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    { _hex: "0x00", _isBigNumber: true },
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // wholesalerAddress:
    "", // wholesalerName:
    { _hex: "0x00", _isBigNumber: true }, // receivingDate: BigNumber
    false, // isVerified:
  ],
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    { _hex: "0x00", _isBigNumber: true },
    0,
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // distributerAddress:
    "", // distributerName:
    { _hex: "0x00", _isBigNumber: true }, // receivingDate: BigNumber
    0, // storageTemperature:
    false, // isVerified:
  ],
  [
    "",
    "0x0000000000000000000000000000000000000000",
    "",
    { _hex: "0x00", _isBigNumber: true },
    false,
    "", // role:
    "0x0000000000000000000000000000000000000000", // retailerAddress:
    "", // retailerName:
    { _hex: "0x00", _isBigNumber: true }, // receivingDate: BigNumber
    false, // isVerified:
  ],
];

interface paramType {
  id: string,
}

const Status: FC = () => {
  const [teachain, setTeachainValue] = useState<any>([]);
  const { id } = useParams<paramType>();

  useEffect(() => {
    console.log(id)
    axios.get(`/teaData/${id}`).then((res) => {
      setTeachainValue(res.data.message)
    })
  }, [id])

  return (
    <React.Fragment>
      <div className="status">
        <div className="status__cont">
          {teachain.map((data: any, key: any) => {
            if (data.length > 2 && key < 7) {
              return <StatusCard key={key} data={data} />;
            }
          })}
        </div>
        {/* <StatusCard />
          <StatusCard />
          <StatusCard /> */}

        {/* <div className="status__cont-item">
            <div className="status__cont-img"></div>

            <div className="status__cont-content status__cont-card js--fadeInRight">
              <div className="status__cont-img-header">
                <h2>Card Title</h2>
              </div>
              <div className="date">25 MAY 2016</div>
              <a className="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div> */}

        {/* <div className="status__cont-item">
            <div className="status__cont-img"></div>

            <div className="timeline-content js--fadeInLeft">
              <div className="date">3 JUN 2016</div>
              <h2>Quote</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                explicabo debitis omnis dolor iste fugit totam quasi inventore!
              </blockquote>
            </div>
          </div> */}
      </div>
    </React.Fragment>
  );
};

export default Status;
