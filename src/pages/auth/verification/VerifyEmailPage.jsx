import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { verifyEmail } from '../../../api';


export default function VerifyEmailPage() {

  const [error, setError] = useState(null);

  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await verifyEmail(token);
        console.log("Token Extracted Successfully")
        navigate('verification/email/');
      } catch (error) {
        console.error(error);
        setError(error.message);
        navigate('verification/:token/email/');
      } finally {
        // finally block
      }
    }
    verifyToken();
  }, [token, navigate]);



  return (
    <div>
      <h1>Verify Email...</h1>
      {error && <p>{error}</p>}
    </div>
  );

}