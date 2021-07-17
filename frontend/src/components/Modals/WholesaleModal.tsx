import React, { FC, useState } from 'react';
import { ethers } from 'ethers';
import { motion, AnimatePresence } from 'framer-motion';

import Teachain from '../../artifacts/contracts/Teachain.sol/Teachain.json';
import { eventNames } from 'node:process';
import config from 'src/config';

interface IModalProps {
	showModal: any;
	setModal: any;
	fetchTeachain: any;
	loading: boolean;
	setLoading: any;
	setError: any;
}

const teachainAddress = config.contractAddress || '';

export const WholesaleModal: FC<IModalProps> = ({ showModal, setModal, fetchTeachain, setLoading, setError }) => {
	const [ batchId, setBatchId ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ name, setName ] = useState('');
	const [ date, setDate ] = useState('');

	async function requestAccount() {
		await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	async function setTeachain(event:React.FormEvent) {
		// if (!teachain) return
    event.preventDefault();
		const newDate = new Date(date);
		console.log(newDate.getTime())
		setLoading(true);
		if (typeof window.ethereum !== 'undefined') {
			try {
				await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(teachainAddress, Teachain.abi, signer);
			const transaction = await contract.functions.createBatch();
			await transaction.wait();
			contract.on('BatchCreated', async (res) => {
				const num = res.toNumber();
				const transactionTwo = await contract.functions.updateWholesalerEntry(
					batchId,
					address,
					name,
					newDate.getTime(),
				);
				await transactionTwo.wait();
				fetchTeachain()
				setLoading(false);
				setModal(false)
			});
			console.log(transaction);
			}
			catch (err) {
				setLoading(false);
				setError({
					isError: true,
					errorMessage: err.message
				});
			}
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
										placeholder="Wholesale Name"
									/>
								</div>
								<div className="date">
									<h1 className="modal__cont__inputCont__label">
										Receiving Date
									</h1>
									<input
										type="date"
										name="date"
										onChange={(e) => setDate(e.target.value)}
										id="date"
										className=""
										required={true}
										placeholder="Receiving Date"
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
