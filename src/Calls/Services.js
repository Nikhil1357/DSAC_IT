import { auth} from '../firebase';
import axios from 'axios';

const url = 'http://localhost:3001/api';

const createToken = async () => {
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
  
    const payloadHeader = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
  }


  export const addToNewUser = async (name, email) => {
    const header = await createToken();
    console.log(header);
    const payload = {
      name,
      email,
    }
    try {
      console.log(payload);
      const res = await axios.post(url, payload, header);
      return res.data;
  
    } catch (e) {
      console.error(e);
    }
  };
  