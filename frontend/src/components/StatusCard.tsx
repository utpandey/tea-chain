import React from "react";
import close from "../assets/close.png";

interface IStatusCard {
  data: any;
}

const StatusCard: React.FC<IStatusCard> = ({ data }) => {
  console.log(data);
  return (
    <div className="status__cont__card">
      <img src={close} className="status__cont-img" />

      <div className="status__cont__card__content js--fadeInLeft">
        <h2 className="status__cont__card__content--title">Title</h2>
        <div className="status__cont__card__content--role">1 MAY 2016</div>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          explicabo debitis omnis dolor iste fugit totam quasi inventore!
        </blockquote>
        {/* <a className="bnt-more" href="javascript:void(0)">
          More
        </a> */}
      </div>
    </div>
  );
};

export default StatusCard;
