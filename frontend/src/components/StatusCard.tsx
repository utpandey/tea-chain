import React from "react";
import close from "../assets/close.png";
import check from "../assets/check_1.png";

interface IStatusCard {
  data: any;
  index: number;
}

const StatusCard: React.FC<IStatusCard> = ({ data, index }) => {
  // console.log(data);
  // console.log(index);
  // data[data.length - 1] = false;
  const batchId = parseInt(data[4], 16);
  console.log(batchId);
  console.log(data[data.length - 1]);
  return (
    <>
      {(() => {
        switch (index) {
          case 1:
            return data[data.length - 1] ? (
              <div className="status__cont__card">
                <img src={check} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Farmer name: <span>{data[2]}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Tea Species: <span>{data[3]}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Tea Location: <span>{data[4]}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Harvesting Date: <span>{parseInt(data[5].hex, 16)}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Flush Number: <span>{data[6]}</span>
                  </h1>
                  <div className="status__cont__card__content--role">
                    Farmer
                  </div>
                </div>
              </div>
            ) : (
              <div className="status__cont__card">
                <img src={close} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Information Not Available
                  </h1>
                  <div className="status__cont__card__content--role">
                    Farmer
                  </div>
                </div>
              </div>
            );

          case 2:
            return data[data.length - 1] ? (
              <div className="status__cont__card">
                <img src={check} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Manufacturer name: <span>{data[2]}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Tea Type: <span>{data[3]}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Receiving Date: <span>{parseInt(data[4].hex, 16)}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Withering Duration :{" "}
                    <span>{parseInt(data[5].hex, 16)}</span>
                  </h1>
                  <div className="status__cont__card__content--role">
                    Manufacturer
                  </div>
                </div>
              </div>
            ) : (
              <div className="status__cont__card">
                <img src={close} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Information Not Available
                  </h1>
                  <div className="status__cont__card__content--role">
                    Manufacturer
                  </div>
                </div>
              </div>
            );

          case 3:
            return data[data.length - 1] ? (
              <div className="status__cont__card">
                <img src={check} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Wholesaler name: <span>{data[2]}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Receiving Date: <span>{parseInt(data[3].hex, 16)}</span>
                  </h1>
                  <div className="status__cont__card__content--role">
                    Wholesaler
                  </div>
                  {/* <a className="bnt-more" href="javascript:void(0)">
            More
          </a> */}
                </div>
              </div>
            ) : (
              <div className="status__cont__card">
                <img src={close} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Information Not Available
                  </h1>
                  <div className="status__cont__card__content--role">
                    Wholesaler
                  </div>
                </div>
              </div>
            );

          case 4:
            return data[data.length - 1] ? (
              <div className="status__cont__card">
                <img src={check} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Distributor name: <span>{data[2]}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Receiving Date: <span>{parseInt(data[3].hex, 16)}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Storage Temp: <span>{data[4]}</span>
                  </h1>
                  <div className="status__cont__card__content--role">
                    Distributor
                  </div>
                </div>
              </div>
            ) : (
              <div className="status__cont__card">
                <img src={close} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Information Not Available
                  </h1>
                  <div className="status__cont__card__content--role">
                    Distributor
                  </div>
                </div>
              </div>
            );

          case 5:
            return data[data.length - 1] ? (
              <div className="status__cont__card">
                <img src={check} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Retailer name: <span>{data[2]}</span>
                  </h1>
                  <h1 className="status__cont__card__content--body">
                    Receiving date: <span>{parseInt(data[3].hex, 16)}</span>
                  </h1>
                  <div className="status__cont__card__content--role">
                    Retailer
                  </div>
                </div>
              </div>
            ) : (
              <div className="status__cont__card">
                <img src={close} className="status__cont-img" />

                <div className="status__cont__card__content js--fadeInLeft">
                  <h1 className="status__cont__card__content--body">
                    Information Not Available
                  </h1>
                  <div className="status__cont__card__content--role">
                    Retailer
                  </div>
                </div>
              </div>
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

export default StatusCard;
