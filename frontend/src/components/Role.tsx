import React,{FC} from 'react'

interface IRoleProps {
  data: any;
  index: any;
}

const Role: FC<IRoleProps> = ({ data,index }) => {
  console.log(data[0])
  console.log(index)
  return (
    <div className="admin__cont__horizCont__item">
      {index === 1 &&  (data[0] === 'Farmer' ? (<>
        <h1 className="admin__cont__horizCont__item__header ">{data[0]}</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: {data[1]}</h1>
      <h1 className="admin__cont__horizCont__item__title">Farmer's name: {data[2]}</h1>
      <h1 className="admin__cont__horizCont__item__title">Tea Species: {data[3]}</h1>
      <h1 className="admin__cont__horizCont__item__title">Location: {data[4]}</h1>
      {/* <h1 className="admin__cont__horizCont__item__title">Harvesting Date: {data[5].toNumber()}</h1> */}
      <h1 className="admin__cont__horizCont__item__title">Flush: {data[6]}</h1>
      </>): <></>)}

      {index === 2 &&  (data[0] === 'Manufacturer'? (<>
        <h1 className="admin__cont__horizCont__item__header ">{data[0]}</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: {data[1]}</h1>
      <h1 className="admin__cont__horizCont__item__title">Manufacturer's name: {data[2]}</h1>
      <h1 className="admin__cont__horizCont__item__title">Tea Type: {data[3]}</h1>
      {/* <h1 className="admin__cont__horizCont__item__title">Receiving Date: {data[4].toNumber()}</h1> */}
      {/* <h1 className="admin__cont__horizCont__item__title">Withering Duration: {data[5].toNumber()}</h1> */}
      </>) : (<>
      <h1 className="admin__cont__horizCont__item__header ">Manufacturer</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: -</h1>
      <h1 className="admin__cont__horizCont__item__title">Manufacturer's name: -</h1>
      <h1 className="admin__cont__horizCont__item__title">Tea Type: -</h1>
      <h1 className="admin__cont__horizCont__item__title">Receiving Date: -</h1>
      <h1 className="admin__cont__horizCont__item__title">Withering Duration: -</h1></>))}

      {index === 3 && (data[0] === 'Wholesaler' ? (<>
        <h1 className="admin__cont__horizCont__item__header ">{data[0]}</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: {data[1]}</h1>
      <h1 className="admin__cont__horizCont__item__title">Wholesaler's name: {data[2]}</h1>
      {/* <h1 className="admin__cont__horizCont__item__title">Receiving Date: {data[3].toNumber()}</h1> */}
      </>): (<>
      <h1 className="admin__cont__horizCont__item__header ">Wholesaler</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: -</h1>
      <h1 className="admin__cont__horizCont__item__title">Wholesaler's name: -</h1></>))}

      {index === 4 && (data[0] === 'Distributer' ? (<>
        <h1 className="admin__cont__horizCont__item__header ">{data[0]}</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: {data[1]}</h1>
        <h1 className="admin__cont__horizCont__item__title">Distributer's name: {data[2]}</h1>
        {/* <h1 className="admin__cont__horizCont__item__title">Receiving Date: {data[3].toNumber()}</h1> */}
      <h1 className="admin__cont__horizCont__item__title">Storage Temperature: {data[4]}</h1>
      </>): (<>
      <h1 className="admin__cont__horizCont__item__header ">Distributer</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: -</h1>
      <h1 className="admin__cont__horizCont__item__title">Distributer's name: -</h1>
      <h1 className="admin__cont__horizCont__item__title">Storage Temperature: -</h1></>))}

      {index === 5 && (data[0] === 'Retailer'? (<>
        <h1 className="admin__cont__horizCont__item__header ">{data[0]}</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: {data[1]}</h1>
      <h1 className="admin__cont__horizCont__item__title">Retailer's name: {data[2]}</h1>
      {/* <h1 className="admin__cont__horizCont__item__title">Receiving Date: {data[3].toNumber()}</h1> */}
      </>): (<>
      <h1 className="admin__cont__horizCont__item__header ">Retailer</h1>
      <h1 className="admin__cont__horizCont__item__title">WalletAddress: -</h1>
      <h1 className="admin__cont__horizCont__item__title">Retailer's name:  -</h1></>))}
     
      {/* <div className="admin__cont__horizCont__item__addCont"></div> */}
    </div>
    );
}

export default Role;