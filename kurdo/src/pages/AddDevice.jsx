import AddDeviceForm from '../components/AddDeviceForm'
import { json,redirect } from 'react-router-dom';
export default function AddDevice() {
  return <AddDeviceForm/>
}

export async function action({request}){
    const data = await request.formData();
    const authData = {
      firstname: data.get('deviceName'),
      lastname: data.get('deviceMac'),
    };
    const response = await fetch('http://localhost:8080/addDevice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    });
  
    if (response.status === false) {
      return response;
    }
  
    if (!response.ok) {
      throw json({ message: 'Could not registered user.' }, { status: 500 });
    }
  
    const resData = await response.json();
    return redirect('/');
}
