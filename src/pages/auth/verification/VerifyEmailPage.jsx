import {  useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { verifyEmail } from '../../../api';
import EmailVerified from '../../EmailVerified';


export default function VerifyEmailPage() {
    const [isVerified, setIsVerified] = useState(false)

  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await verifyEmail(token);
        console.log("Token Extracted Successfully")
        setIsVerified(true)
      } catch (error) {
        console.error(error);
        navigate('/auth/verification/resend-email/', { replace: true });
      } finally {
        console.log('Code block is executed successful')
      }
    }
    verifyToken();
  }, [token, navigate]);



  return (
    <div>
      {isVerified ? (
        <EmailVerified />
      ) : (
        <p>Verifying...</p>
      )}
    </div>
  );

}