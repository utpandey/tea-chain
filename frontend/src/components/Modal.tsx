import React, { FC, useState } from 'react';
import { ethers } from 'ethers';
import { motion, AnimatePresence } from 'framer-motion';

import Teachain from '../artifacts/contracts/Teachain.sol/Teachain.json';
import { eventNames } from 'node:process';

interface IModalProps {
	showModal: any;
	setModal: any;
	fetchTeachain: any;
}

const teachainAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export const Modal: FC<IModalProps> = ({ showModal, setModal, fetchTeachain }) => {
	const [ batchId, setBatchId ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ name, setName ] = useState('');
	const [ teaSpecies, setTeaSpecies ] = useState('');
	const [ location, setLocation ] = useState('');
	const [ date, setDate ] = useState('');
	const [ flush, setFlush ] = useState('');
	// console.log('modalopens');

	async function requestAccount() {
		await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	async function setTeachain(event:React.FormEvent) {
		// if (!teachain) return
    event.preventDefault();
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
					address,
					name,
					teaSpecies,
					location,
					Math.round(new Date().getTime() / 10000),
					flush
				);
				await transactionTwo.wait();
				fetchTeachain()
				setModal(false)
			});
			console.log(transaction);
		}
	}

	// const batchChange = (event: any) => {
	// 	setBatchId(event.target.value);
	// 	console.log(batchId);
	// };
	// const addressChange = (event: any) => {
  //   setAddress(event.target.value);
  //   console.log(batchId);
	// 	console.log(address);
	// };
	// const nameChange = (event: any) => {
	// 	setName(event.target.value);
	// 	console.log(name);
	// };
	// const teaSpeciesChange = (event: any) => {
	// 	setTeaSpecies(event.target.value);
	// 	console.log(teaSpecies);
	// };
	// const teaLocationChange = (event: any) => {
	// 	setLocation(event.target.value);
	// 	console.log(location);
	// };
	// const dateChange = (event: any) => {
	// 	setDate(event.target.value);
	// 	console.log(date);
	// };
	// const flushChange = (event: any) => {
	// 	setFlush(event.target.value);
	// 	console.log(flush);
	// };

	return (
		<AnimatePresence>
			{showModal ? (
				<React.Fragment>
					<motion.div
						initial={{
							opacity: 0
						}}
						animate={{
							opacity: 1,
							transition: {
								duration: 0.3
							}
						}}
						exit={{
							opacity: 0,
							transition: {
								delay: 0.3
							}
						}}
						onClick={() => setModal(false)}
						className="modal-backdrop"
					/>
					<motion.div
						initial={{
							scale: 0
						}}
						animate={{
							scale: 1,
							transition: {
								duration: 0.3
							}
						}}
						exit={{
							scale: 0,
							transition: {
								delay: 0.3
							}
						}}
						className="modal-content-wrapper"
					>
						<motion.div
							className="modal-content"
							initial={{
								x: 60,
								opacity: 0
							}}
							animate={{
								x: 0,
								opacity: 1,
								transition: {
									delay: 0.3,
									duration: 0.3
								}
							}}
							exit={{
								x: 60,
								opacity: 0,
								transition: {
									duration: 0.3
								}
							}}
						>
							<form onSubmit={setTeachain} className="modal__cont">
								<h1 className="modal__cont__title">Batch Details</h1>
								{/* <div className="modal__cont__inputCont">
									<input
										type="text"
                    name="batchId"
                    // value={batchId}
										onChange={(e) => setBatchId(e.target.value)}
										// onChange={(e)=> setBatchId({...{batchId}, batchId: e.target.value})}
										id="batchId"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Batch ID"
									/>
								</div> */}
								<div className="modal__cont__inputCont">
									<input
										type="text"
										name="address"
                    onChange={(e) => setAddress(e.target.value)}
										id="address"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Wallet Address"
									/>
								</div>
								<div className="modal__cont__inputCont">
									<input
										type="text"
										name="name"
											onChange={(e) => setName(e.target.value)}
										id="name"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Farmer Name"
									/>
								</div>
								<div className="modal__cont__inputCont">
									<input
										type="text"
										name="species"
											onChange={(e) => setTeaSpecies(e.target.value)}
										id="species"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Tea Species"
									/>
								</div>
								<div className="modal__cont__inputCont">
									<input
										type="text"
										name="location"
											onChange={(e) => setLocation(e.target.value)}
										id="location"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Tea Location"
									/>
								</div>
								<div className="modal__cont__inputCont">
									<input
										type="text"
										name="date"
											onChange={(e) => setDate(e.target.value)}
										id="date"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Harvesting Date"
									/>
								</div>
								<div className="modal__cont__inputCont">
									<input
										type="text"
										name="flush"
											onChange={(e) => setFlush(e.target.value)}
										id="flush"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Flush Number"
									/>
								</div>
								<input type="submit" value="Submit" className="modal__cont__submitBtn" />
							</form>
						</motion.div>
					</motion.div>
				</React.Fragment>
			) : null}
		</AnimatePresence>
	);
};
