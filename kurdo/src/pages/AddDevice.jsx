import AddDeviceForm from '../components/AddDeviceForm'
import { json,redirect } from 'react-router-dom';
export default function AddDevice() {
  return <AddDeviceForm/>
}

export async function action({request}){
    const data = await request.formData();
    const authData = {
      token:localStorage.getItem("token"),
      deviceName: data.get('deviceName'),
      deviceMac: data.get('deviceMac'),
    };
    const response = await fetch('http://154.53.180.108:8080/api/addDevice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    });
    console.log(authData);
    console.log(response)
    if (response.status === false) {
      return response;
    }
  
    if (!response.ok) {
      throw json({ message: 'Could not registered user.' }, { status: 500 });
    }
  
    return redirect('/');
}
