import classes from "./LoginForm.module.css"
import Image from "./../assets/termosense.png"
import Image2 from "./../assets/smart-home.png"
import { Form, Link, useActionData } from 'react-router-dom'
export default function LoginForm() {
  const data = useActionData();
  return (
    <>
      <div className="container mw-100">
        <div className="row min-vh-100">
          <div className="col-5" style={{ backgroundColor: "#192c42" }}>
            <div className="ms-5">
              <div className='mt-3'>
                <img src={Image} className='img-fluid' alt="" width={400} height={100} />
              </div>
              <div style={{ marginTop: "40px" }}>
                <h1>Sign Up</h1>
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
                    <label htmlFor='firstname'>Firstname</label>
                    <input type="text" className={`${classes.input} form-control mt-2`} placeholder="test" name='firstname' id='firstname' required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor='lastname'>Lastname</label>
                    <input type="text" className={`${classes.input} form-control mt-2`} placeholder="test" name='lastname' id='lastname' required/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor='emailreg'>Email</label>
                    <input type="email" className={`${classes.input} form-control mt-2`} placeholder="test@test.com" name='emailreg' id='emailreg' required/>
                  </div>
                  <div className='mt-4 mb-4'>
                    <label htmlFor="passwordreg">Password</label>
                    <input type="password" name="passwordreg" id="passwordreg" placeholder='********' className={`${classes.input} form-control mt-2`} required />
                  </div>
                  <div>
                    <p style={{color:"#e6e6e650 "}}>Do you have account? <Link to="/auth">Login</Link></p>
                  </div>
                  <div>
                    <button className='btn w-75 mt-5' >Login</button>
                  </div>
                  <div >
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
