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
      const contract = new ethers.Contract(teachainAddress, Teachain.abi, provider)
      console.log(contract)
      try {
        const data = await contract.functions.getBatches('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
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
      contract.on('BatchCreated', async (res) => {
        const num = res.toNumber();
        const transactionTwo = await contract.functions.updateFarmerEntry(num, '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 'Jack', "Camellia sinensis", "Darjeeling", Math.round(((new Date()).getTime())/10000), 1);
        await transactionTwo.wait();

      })
      console.log(transaction)
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