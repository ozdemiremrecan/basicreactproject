import { Form } from "react-router-dom";
import './AddDeviceForm.css'
export default function AddDeviceForm() {
  return (
    <>
      <Form method="post">
        <div className="d-flex justify-content-center align-items-center min-vh-100 custom-background">
          <div className="custom-form p-4">
            <h2 className="text-center mb-4">Add New Device</h2>
            <div className="mb-3">
              <label htmlFor='deviceName'>Device Name</label>
              <input type="text" className="form-control mt-2" placeholder="example" name='deviceName' id='deviceName' />
            </div>
            <div className='mt-4 mb-4'>
              <label htmlFor="deviceMac">Device Mac</label>
              <input type="text" name="deviceMac" id="deviceMac" placeholder='11:11:11:11:11:11' className="form-control mt-2" required />
            </div>
            <div className="text-center">
              <button style={{ backgroundColor: "#25B56E" }} className='btn w-75 mt-5'>Add Device</button>
            </div>
          </div>
        </div>
      </Form>

    </>
  )
}
