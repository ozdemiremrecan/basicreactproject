import RegisterForm from '../components/RegisterForm'
import { json,redirect } from 'react-router-dom';
export default function Register() {
  return (
    <RegisterForm/>
  )
}
export async function action({ request }) {  
    const data = await request.formData();
    const authData = {
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      email: data.get('emailreg'),
      password: data.get('passwordreg'),
    };
    const response = await fetch('http://154.53.180.108:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    });
    console.log(response)
    if (response.status === false) {
      return response;
    }
  
    if (!response.ok) {
      throw json({ message: 'Could not registered user.' }, { status: 500 });
    }
  
    const resData = await response.json();
    const token = resData.token;
  
    localStorage.setItem('token', token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());
    return redirect('/');
  }
