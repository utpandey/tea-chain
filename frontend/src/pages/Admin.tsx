import React,{FC,useState} from 'react'
import { ethers } from 'ethers'

import Teachain from '../artifacts/contracts/Teachain.sol/Teachain.json'

import user from '../assets/user.svg'
import document from '../assets/document.svg'

declare global {
  /* tslint:disable */
  interface Window {
    ethereum: any;
  }
}

// interface IAdminState {
//   teachain: string;
// }
 
const teachainAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Admin: FC = () => {
  const [teachain, setTeachainValue] = useState<any>();

  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'})
  }

  async function fetchTeachain() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(teachainAddress, Teachain.abi, provider)
      console.log(contract)
      try {
        const data = await contract.functions.getBatches('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
        console.log('data:', data)
        setTeachainValue(data)
        console.log('bigN' + data[0][0][2][3].toString())
        let a = data[0][0][2][3].toNumber()
        console.log(new Date(a)) 
        console.log(a)
      } catch (err) {
        console.log('Error: ',err)
      }
    }
  }
  async function setTeachain() {
    // if (!teachain) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(teachainAddress, Teachain.abi, signer);
      const transaction = await contract.functions.createBatch()
      await transaction.wait()
      contract.on('BatchCreated', async (res) => {
        const num = res.toNumber();
        const transactionTwo = await contract.functions.updateFarmerEntry(num, '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 'Jack', "Camellia sinensis", "Darjeeling", Math.round(((new Date()).getTime())/10000), 1);
        await transactionTwo.wait();

      })
      console.log(transaction)
      // fetchTeachain()
    }
  }

  async function updateManufcturerEntry() {
    // if (!teachain) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(teachainAddress, Teachain.abi, signer);
      // const transaction = await contract.functions.createBatch()
      const transactionTwo = await contract.functions.updateManufcturerEntry(596, '0x70997970C51812dc3A010C7d01b50e0d17dc79C8', 'Jill', "Green Tea", Math.round(((new Date()).getTime())), "16");
      await transactionTwo.wait();
      console.log(transactionTwo)
      // fetchTeachain()
    }
  }

  async function updateWholesalerEntry() {
    // if (!teachain) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(teachainAddress, Teachain.abi, signer);
      // const transaction = await contract.functions.createBatch()
      const transactionTwo = await contract.functions.updateWholesalerEntry(596, '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC', 'Jerry', Math.round(((new Date()).getTime())/10000));
      await transactionTwo.wait();
      console.log(transactionTwo)
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
            <h1 className="admin__cont__infoCont__rolesCont__content__value">5</h1>
          </div>
        </div>
      </div>
      <div className="admin__cont__batchCont">
        <div className="admin__cont__batchCont__header">
          <h1 className="admin__cont__batchCont__header__title">BATCHES OVERVIEW</h1>
          <button className="admin__cont__batchCont__header__btn">Create Button</button>
        </div>
        <hr />
        .admin__cont__batchCont__
      </div>
      {/* <button onClick={setTeachain}>Click</button>
      <button onClick={fetchTeachain}>Click</button>
      <button onClick={updateManufcturerEntry}>Click</button>
      <button onClick={updateWholesalerEntry}>Click</button> */}
      </div>
    );
}

export default Admin;