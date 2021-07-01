import React, { FC, useState, useEffect } from "react";
import StatusCard from "src/components/StatusCard";
import axios from "../utils/axios";
import { useParams } from "react-router";
import Loader from "../components/Loader";

declare global {
  /* tslint:disable */
  interface Window {
    ethereum: any;
  }
}
interface paramType {
  id: string;
}

const Status: FC = () => {
  const [teachain, setTeachainValue] = useState<any>([]);
  const { id } = useParams<paramType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(id);
    setLoading(true);
    axios.get(`/teaData/${id}`).then((res) => {
      setTeachainValue(res.data.message);
      setLoading(false);
    });
  }, [id]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="status">
            <div className="status__cont">
              {teachain.map((data: any, index: any) => {
                if (data.length > 2 && index < 7) {
                  return <StatusCard data={data} key={index} index={index} />;
                }
              })}
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Status;
