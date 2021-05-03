import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Verification = () => {
  const verificationId = useParams<{id: string}>();

  useEffect(() => {
    const baseUrl = 'http://localhost:8080'
    console.log(verificationId.id)
    axios({
      url: baseUrl + '/authentication/verification?id=' + verificationId.id,
      method: 'GET',
    }).then(res=> {
      console.log(res);
    })
  }, [verificationId])

  return (
    <div>
      <h1>{verificationId.id}</h1>
    </div>
  )
}

export default Verification
