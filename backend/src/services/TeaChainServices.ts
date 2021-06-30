import { ethers } from 'ethers';
import Teachain from '../artifacts/contracts/Teachain.sol/Teachain.json';
import logger from '../config/logger';
import serverConfig from '../config';

const retrieveData = async (id: string) => {
  // eslint-disable-next-line new-cap
  const provider = new (ethers.providers.getDefaultProvider as any)(serverConfig.providerAddress);
  const contract = new ethers.Contract(serverConfig.contractAddress || '', Teachain.abi, provider);
  try {
    const data = await contract.functions.getTeaBatch(parseInt(id, 10));
    const response = data[0];
    logger.info('TEACHAIN', 'retrieve data', response);
    if (response[1].isVerified === false) {
      return false;
    }
    return response;
  } catch (err) {
    logger.error('TEACHAIN', 'retrieve data', err);
    return false;
  }
};

export default { retrieveData };
