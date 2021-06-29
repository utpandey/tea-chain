import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { AddBatch } from "src/store/batch";
import { getBatchStateReducer } from "../store/batch";

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
  // console.log(data[1]);
  return (
    <div className="box1">
      <h1 className="box1__title" onClick={handleClick}>
        {q}
      </h1>
      <div className="box1__item">
        {/* {data.map((batchData: any, key: any) => (
           <BatchComponent batchData={batchData} key={key} />
        
      ))} */}
        {data.map((batchData: any, key: any) => {
          if (batchData.length > 2) {
            // if (batchData[batchData.length -1]) {
            // console.log(data.indexOf(batchData));
            // const isProcess =
            //   data[data.indexOf(batchData) - 1][batchData.length - 1];
            const bool = data[data.indexOf(batchData) - 1].isVerified;
            // console.log(data[data.indexOf(batchData) - 1].isVerified);
            // console.log(isProcess);
            return (
              <BatchComponent batchData={batchData} key={key} bool={bool} />
            );
          }
        })}
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
  // console.log("BatchComponent");
  // console.log(batchData);
  // console.log(batchData[batchData.length-1])
  // console.log(id)
  // for (let i = 0; i < id.length; i++) {
  //   if (index) {
  //     console.log(index)
  //   }
  // }
  // console.log(id[0]);
  console.log(bool);
  const [isProcessed, setProcess] = React.useState(false);
  React.useEffect(() => {
    if (batchData[batchData.length - 1]) {
      setProcess(true);
    }
  }, []);
  // console.log(batchData[batchData.length - 1]);
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
      {/* <div className="box2__item">{batchData[0]}</div>
      <div className="box2__item">{batchData[1]}</div>
      <div className="box2__item">{batchData[2]}</div> */}
      {/* <div className="admin__cont__batchCont__content__row__role">{batchData[3]}</div> */}
      {/* <div className="admin__cont__batchCont__content__row__role">{batchData[4]}</div> */}
    </div>
  );
};
