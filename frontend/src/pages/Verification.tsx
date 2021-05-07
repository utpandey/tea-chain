import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GoVerified } from 'react-icons/go';
import { BiLoaderAlt } from 'react-icons/bi';
import axios from '../utils/axios';

const Verification = () => {
  const verificationId = useParams<{ id: string }>();
  const [authenticationLoader, setAuthenticationLoader] = useState<boolean>(false)

  useEffect(() => {
    console.log(verificationId.id)
    axios.get('/authentication/verification?id=' + verificationId.id).then(res => {
      console.log(res);
      setAuthenticationLoader(true);
    })
  }, [verificationId])

  return (
    <div className="verification__cont">
      {
        authenticationLoader ?
          (
            <div className="verified__cont">
              <GoVerified className="verified__icon" size={72} />
              <h1>Congratulations! Your account has been verified.</h1>
            </div>
          )
          : 
          (
            <BiLoaderAlt className="loading__icon" size={72} />
          )
      }
    </div>
  )
}

export default Verification
