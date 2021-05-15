import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GoVerified } from 'react-icons/go';
import { BiErrorCircle, BiLoaderAlt } from 'react-icons/bi';
import axios from '../utils/axios';

const Verification = () => {
  const verificationId = useParams<{ id: string }>();
  const [authenticationLoading, setAuthenticationLoading] = useState<boolean>(true)
  const [invalidToken, setInvalidToken] = useState<boolean>(false)

  useEffect(() => {
    console.log(verificationId.id)
    axios.get('/authentication/verification?id=' + verificationId.id).then(res => {
      console.log(res);
    }).catch((err) => {
      setInvalidToken(true);
      console.error(err);
    }).finally(() => {
      setAuthenticationLoading(false);
    })
  }, [verificationId])

  return (
    <div className="verification__cont">
      {
        authenticationLoading ?
          (
            <BiLoaderAlt className="loading__icon" size={72} />
          )
          :
          (
            invalidToken ? (
              <div className="verified__cont">
                <BiErrorCircle className="invalid_token__icon" size={72} />
                <h1>The token provided is invalid.</h1>
              </div>
            ) : (
              <div className="verified__cont">
                <GoVerified className="verified__icon" size={72} />
                <h1>Congratulations! Your account has been verified.</h1>
              </div>
            )
          )
      }
    </div>
  )
}

export default Verification
