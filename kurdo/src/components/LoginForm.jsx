import classes from "./LoginForm.module.css"
import Image from "./../assets/termosense.png"
import Image2 from "./../assets/smart-home.png"
import { Form, Link, useActionData, useNavigate } from 'react-router-dom'
export default function LoginForm() {
  const data = useActionData();
  const navigate=useNavigate();
  return (
    <>
      <div className="container mw-100">
        <div className="row min-vh-100">
          <div className="col-5" style={{ backgroundColor: "#192c42" }}>
            <div className="ms-5">
              <div className='mt-5'>
                <img src={Image} className='img-fluid' alt="" width={400} height={100} />
              </div>
              <div style={{ marginTop: "100px" }}>
                <h1>Sign In</h1>
              </div>
              {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
              <div>
                <Form method='post' className='mt-5'>
                  <div className="mb-3">
                    <label htmlFor='email'>Email</label>
                    <input type="email" className={`${classes.input} form-control mt-2`} placeholder="test@test.com" name='email' id='email' />
                  </div>
                  <div className='mt-4 mb-4'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='********' className={`${classes.input} form-control mt-2`} required />
                  </div>
                  <div>
                    <p style={{color:"#e6e6e650 "}}>Don't have an account? <Link to="/register">Sign Up</Link></p>
                  </div>
                  <div>
                    <button style={{backgroundColor:"#25B56E"}} className='btn w-75 mt-5' >Login</button>
                  </div>
                  <div className="mt-5">
                    <Link to="/">Go Home</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-7" style={{ backgroundColor: "#25b56e" }}>
            <img src={Image2} className={`img-fluid`} width={830} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
