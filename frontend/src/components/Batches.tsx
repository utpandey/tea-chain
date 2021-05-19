import React, { FC } from 'react';

interface IBatchesProps {
	data: any;
}

const Batches: FC<IBatchesProps> = ({ data }) => {
	// console.log('id: ' + data[0]);
	const [ id, setId ] = React.useState(0);
	// setId(data[0]);
	for (const val of data) {
		// console.log(val._hex)
	}
	// for(let i = 0; i < data.length; i++) {
	// console.log(id);
	// }
	return (
		<div className="admin__cont__batchCont__content__table__column" style={{ display: 'flex', flexDirection: 'row' }}>
			{/* <h1>{id}</h1> */}
			{data.map((batchData: any, key: any) => (
				<BatchComponent batchData={batchData[0]} key={key} id={batchData._hex} />
			))}
		</div>
	);
};

export default Batches;

interface IBatchComponentProps {
	batchData: any;
	id: any;
}

const BatchComponent: FC<IBatchComponentProps> = ({ batchData, id }) => {
	console.log(batchData)
  console.log(id)
  // for (let i = 0; i < id.length; i++) {
  //   if (index) {
  //     console.log(index)  
  //   }
  // }
	// console.log(id[0]);
	return (
    <div className="admin__cont__batchCont__content__table__row" style={{ color: 'black' }}>
      {/* <h1>{id}</h1> */}
      <div className="admin__cont__batchCont__content__row__role">{batchData}</div>
      {/* <div className="admin__cont__batchCont__content__row__role">{batchData[1]}</div> */}
      {/* <div className="admin__cont__batchCont__content__row__role">{batchData[2]}</div>
      <div className="admin__cont__batchCont__content__row__role">{batchData[3]}</div>
      <div className="admin__cont__batchCont__content__row__role">{batchData[4]}</div> */}
		</div>
	);
};
