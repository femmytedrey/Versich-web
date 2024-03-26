import { useParams, useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { verifyEmail } from '../../../api';
import { getUser } from '../../../actions/auth';
import { useEffect } from 'react';

export default function VerifyEmailPage() {

  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerifyEmail = async () => {
    try {
      await verifyEmail(token);
      dispatch(getUser()); 
      navigate('verification/email/');
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleVerifyEmail();
  }, [token]);

  return (
    <div>Verifying email...</div> 
  );

}