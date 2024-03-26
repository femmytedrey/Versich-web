import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { verifyEmail } from '../../../api';


export default function VerifyEmailPage() {

  const [error, setError] = useState(null);

  const { tokens } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await verifyEmail(tokens);
        console.log("Token Extracted Successfully")
        navigate('verification/email/');
      } catch (error) {
        console.error(error);
        setError(error.message);
        navigate('/resend-email');
      } finally {
        // finally block
      }
    }
    verifyToken();
  }, [tokens, navigate]);



  return (
    <div>
      <h1>Verify Email...</h1>
      {error && <p>{error}</p>}
    </div>
  );

}