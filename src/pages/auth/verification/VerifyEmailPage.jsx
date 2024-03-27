import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { verifyEmail } from '../../../api';


export default function VerifyEmailPage() {


  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await verifyEmail(token);
        console.log("Token Extracted Successfully")
        navigate('/auth/verification/email-verified', { replace: true });
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
      <h1>Verify Email...</h1>
    </div>
  );

}