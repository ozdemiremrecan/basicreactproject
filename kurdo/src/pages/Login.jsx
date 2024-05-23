import LoginForm from '../components/LoginForm'
import { json,redirect } from 'react-router-dom';

export default function Login() {
  return <LoginForm/>
}
export async function action({ request }) {  
    const data = await request.formData();
    const authData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    const response = await fetch('http://154.53.180.108:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    });
  
    if (response.status === 422 || response.status === 401|| response.status === 400) {
      return response;
    }
    console.log(response)
    if (!response.ok) {
      throw json({ message: 'Could not authenticate user.' }, { status: 500 });
    }
  
    const resData = await response.json();
    const token = resData.token;
    localStorage.setItem('token', token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());
    return redirect('/');
  }