import React, { FC, useState } from "react";
import { ethers } from "ethers";
import { motion, AnimatePresence } from "framer-motion";

import Teachain from "../../artifacts/contracts/Teachain.sol/Teachain.json";
import config from "src/config";

interface IModalProps {
  showModal: any;
  setModal: any;
  fetchTeachain: any;
  loading?: boolean;
  setLoading: any;
  setError: any;
}

const teachainAddress = config.contractAddress || "";

export const FarmerModal: FC<IModalProps> = ({
  showModal,
  setModal,
  fetchTeachain,
  loading,
  setLoading,
  setError,
}) => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [teaSpecies, setTeaSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [flush, setFlush] = useState("");

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function setTeachain(event: React.FormEvent) {
    // if (!teachain) return
    event.preventDefault();
    const newDate = new Date(date);
    console.log(newDate.getTime());
    setLoading(true);
    if (typeof window.ethereum !== "undefined") {
      try {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log(teachainAddress);
        const contract = new ethers.Contract(
          teachainAddress,
          Teachain.abi,
          signer
        );
        const transaction = await contract.functions.createBatch();
        await transaction.wait();
        contract.on("BatchCreated", async (res) => {
          const num = res.toNumber();
          const transactionTwo = await contract.functions.updateFarmerEntry(
            num,
            address,
            name,
            teaSpecies,
            location,
            newDate.getTime(),
            // Math.round(new Date().getTime() / 10000),
            flush
          );
          await transactionTwo.wait();
          fetchTeachain();
          setLoading(false);
          setModal(false);
        });
        console.log("before transaction // MoDal");
        console.log(transaction);
      } catch (err: any) {
        setLoading(false);
        setError({
          isError: true,
          errorMessage: err.message,
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
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => setModal(false)}
            className="modal-backdrop"
          />
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className="modal-content-wrapper"
          >
            <motion.div
              className="modal-content"
              initial={{
                x: 60,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                x: 60,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
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
                    name="teaSpecies"
                    onChange={(e) => setTeaSpecies(e.target.value)}
                    id="teaSpecies"
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
                <div className="date">
                  <h1 className="modal__cont__inputCont__label">
                    Harvesting Date
                  </h1>
                  <input
                    type="date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                    id="date"
                    className=""
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
                <input
                  type="submit"
                  value="Submit"
                  className="modal__cont__submitBtn"
                />
              </form>
            </motion.div>
          </motion.div>
        </React.Fragment>
      ) : null}
    </AnimatePresence>
  );
};
