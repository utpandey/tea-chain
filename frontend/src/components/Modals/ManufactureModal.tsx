import React, { FC, useState } from 'react';
import { ethers } from 'ethers';
import { motion, AnimatePresence } from 'framer-motion';

import Teachain from '../../artifacts/contracts/Teachain.sol/Teachain.json';
import { eventNames } from 'node:process';

interface IModalProps {
	showModal: any;
	setModal: any;
	fetchTeachain: any;
}

const teachainAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export const ManufactureModal: FC<IModalProps> = ({ showModal, setModal, fetchTeachain }) => {
	const [ batchId, setBatchId ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ name, setName ] = useState('');
	const [ teaType, setTeaType ] = useState('');
	const [ date, setDate ] = useState('');
	const [ duration, setDuration ] = useState('');
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
				const transactionTwo = await contract.functions.updateManufcturerEntry(
					batchId,
					address,
					name,
					teaType,
					Math.round(new Date().getTime() / 10000),
					duration
				);
				await transactionTwo.wait();
				fetchTeachain()
				setModal(false)
			});
			console.log(transaction);
		}
	}

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
								<div className="modal__cont__inputCont">
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
								</div>
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
										placeholder="Manufacturer Name"
									/>
								</div>
								<div className="modal__cont__inputCont">
									<input
										type="text"
										name="teaType"
											onChange={(e) => setTeaType(e.target.value)}
										id="teaType"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Tea Type"
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
										placeholder="Receiving Date"
									/>
								</div>
								<div className="modal__cont__inputCont">
									<input
										type="text"
										name="duration"
											onChange={(e) => setDuration(e.target.value)}
										id="duration"
										className="modal__cont__inputCont__input"
										required={true}
										placeholder="Withering Duration"
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
