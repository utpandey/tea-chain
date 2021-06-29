import React, { FC, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useSelector } from 'react-redux';

import Role from '../components/Role';
import {FarmerModal, ManufactureModal, DistributerModal, RetailModal, WholesaleModal } from '../components/Modals'
import Teachain from '../artifacts/contracts/Teachain.sol/Teachain.json';
import { getBatchStateReducer } from '../store/batch';
import { getUserTypeReducer } from '../store/auth';

import user from '../assets/user.svg';
import document from '../assets/document.svg';
import Batches from 'src/components/Batches';

declare global {
	/* tslint:disable */
	interface Window {
		ethereum: any;
	}
}

const teachainAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const Admin: FC = () => {
	const [ teachain, setTeachainValue ] = useState<any>([]);
	const [ batchNo, setBatchNo ] = useState<any>();
	const batchState = useSelector(getBatchStateReducer);
	const userRole = useSelector(getUserTypeReducer);
	const [ showModal, setModal ] = useState<boolean>(false);
	// console.log(batchState)
	// console.log(userRole === 'Manufacturer')
	useEffect(() => {
		fetchTeachain();
	}, []);

	async function requestAccount() {
		await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	async function fetchTeachain() {
		if (typeof window.ethereum !== 'undefined') {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const contract = new ethers.Contract(teachainAddress, Teachain.abi, provider);
			try {
				const data = await contract.functions.getBatches('0x2546BcD3c84621e976D8185a91A922aE77ECEc30');
				const response = await data[0];
				setTeachainValue(response);

				setBatchNo(data[0].length);

				if (response.length > 0) {
					// console.log(response)
					setTeachainValue(response);
					// console.log(teachain)
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
				console.log('Error: ', err);
			}
		}
	}
	async function setTeachain() {
		// if (!teachain) return
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(teachainAddress, Teachain.abi, signer);
			const transaction = await contract.functions.createBatch();
			await transaction.wait();
			contract.on('BatchCreated', async (res) => {
				const num = res.toNumber();
				const transactionTwo = await contract.functions.updateFarmerEntry(
					num,
					'0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
					'Jack',
					'Camellia sinensis',
					'Darjeeling',
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
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(teachainAddress, Teachain.abi, signer);
			// const transaction = await contract.functions.createBatch()
			const transactionTwo = await contract.functions.updateManufcturerEntry(
				596,
				'0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
				'Jill',
				'Green Tea',
				Math.round(new Date().getTime()),
				'16'
			);
			await transactionTwo.wait();
			console.log(transactionTwo);
			// fetchTeachain()
		}
	}

	async function updateWholesalerEntry() {
		// if (!teachain) return
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(teachainAddress, Teachain.abi, signer);
			// const transaction = await contract.functions.createBatch()
			const transactionTwo = await contract.functions.updateWholesalerEntry(
				596,
				'0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
				'Jerry',
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
					<h1 className="admin__cont__infoCont__rolesCont__title">Total Roles</h1>
					<div className="admin__cont__infoCont__rolesCont__content">
						<img src={user} alt="" className="admin__cont__infoCont__rolesCont__content__img" />
						<h1 className="admin__cont__infoCont__rolesCont__content__value">5</h1>
					</div>
				</div>
				<div className="admin__cont__infoCont__rolesCont">
					<h1 className="admin__cont__infoCont__rolesCont__title">Total Batches</h1>
					<div className="admin__cont__infoCont__rolesCont__content">
						<img src={document} alt="" className="admin__cont__infoCont__rolesCont__content__img" />
						<h1 className="admin__cont__infoCont__rolesCont__content__value">{batchNo}</h1>
					</div>
				</div>
			</div>
			<div className="admin__cont__batchCont">
				<div className="admin__cont__batchCont__header">
					<h1 className="admin__cont__batchCont__header__title">BATCHES OVERVIEW</h1>
					{/* // @ts-ignore */}
					{userRole === 'Farmer' ? (
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
				<div className="admin__cont__batchCont__content" style={{ display: 'flex', flexDirection: 'column' }}>
					<div className="admin__cont__batchCont__content__header">
						<h1 className="admin__cont__batchCont__content__header__text">Batch ID</h1>
						<h1 className="admin__cont__batchCont__content__header__text">Farm Inpsector</h1>
						<h1 className="admin__cont__batchCont__content__header__text">Manufacturer</h1>
						<h1 className="admin__cont__batchCont__content__header__text">Wholesaler</h1>
						<h1 className="admin__cont__batchCont__content__header__text">Distributor</h1>
						<h1 className="admin__cont__batchCont__content__header__text">Retailer</h1>
					</div>
					<div className="admin__cont__batchCont__content__table">
						<hr />
						{teachain.length > 0 &&
							teachain.map((data: any, key: any) => <Batches data={data} key={key} />)}
					</div>
				</div>
			</div>
			<div className="admin__cont__horizCont">
				{batchState ? (
					batchState.map((data: any, index: any) => {
						if (data.length > 2) {
							return <Role data={data} index={index} key={index} />;
						}
					})
				) : null}
			</div>
			{userRole === 'Farmer' && <FarmerModal showModal={showModal} setModal={setModal} fetchTeachain={fetchTeachain} />}
			{userRole === 'Manufacturer' && <ManufactureModal showModal={showModal} setModal={setModal} fetchTeachain={fetchTeachain} />}
			{userRole === 'Wholesaler' && <WholesaleModal showModal={showModal} setModal={setModal} fetchTeachain={fetchTeachain} />}
			{userRole === 'Distributer' && <DistributerModal showModal={showModal} setModal={setModal} fetchTeachain={fetchTeachain} />}
			{userRole === 'Retailer' && <RetailModal showModal={showModal} setModal={setModal} fetchTeachain={fetchTeachain} />}

			{/* <button onClick={fetchTeachain}>Click</button>
			<button onClick={updateManufcturerEntry}>Click</button>
			<button onClick={updateWholesalerEntry}>Click</button> */}
		</div>
	);
};

export default Admin;

// console.log(obj[i][obj[i].length-1]) to get isUpdate
