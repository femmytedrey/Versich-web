import * as api from '../api';
import { getUser } from './auth';

export const verifyEmail = (token) => async dispatch => {

  try {
    const {data} = await api.verifyEmail(token);
    
    if(data.status !== 'success') {
      throw Error(JSON.stringify(data));
    }
    
    await dispatch(getUser());
    
    return data;

  } catch (error) {

    const _err = JSON.stringify({
      status: 'server.returned.status', 
      message: 'Error message'
    });
    
    throw Error(_err);

  }

};