import React,{FC,useState} from 'react'
import { ethers } from 'ethers'

import Teachain from '../artifacts/contracts/Teachain.sol/Teachain.json'

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
      const contract = new ethers.Contract(teachainAddress,Teachain.abi,provider)
      try {
        const data = await contract.functions.getBatches('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
        console.log('data:', data)
        setTeachainValue(data)
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
      // fetchTeachain()
    }
  }
  return (
    <div className="">
      Admin
      <button onClick={setTeachain}>Click</button> 
      <button onClick={fetchTeachain}>Click</button>
      </div>
    );
}

export default Admin;