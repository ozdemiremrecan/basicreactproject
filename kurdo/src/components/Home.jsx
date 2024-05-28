import { useEffect, useState } from "react";
import { useRouteLoaderData, Link } from "react-router-dom";
import ShowDevice from "./ShowDevice";
import "./Home.css"
export default function Home() {
  const token = useRouteLoaderData("root");
  const [ex,setEx]=useState([])
  const [areas, setAreas] = useState(null);
  const [click,setClick]=useState(null)
  const copyAreas=[]
  useEffect(() => {
    fetch("http://154.53.180.108:8080/api/userdevices", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token })
    }).then(response => response.json()).then(data => {
      Object.keys(data.devices).forEach((key,index)=>{
        copyAreas.push([key.toString(),data.devices[key].toString()])
      })
      setAreas(copyAreas)
    }).catch(err=>console.error(err))
  }, [])
  return (
    <>
      
      {token && <nav className="navbar navbar-expand-lg mt-5 custom-navbar">
  <div className="container-fluid">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        {areas !== null && areas.map((value, index) => (
          <li className="nav-item" key={index}>
            <button type="button"
              onClick={() => setClick(value)}
              className="nav-link m-2 custom-button"
            >
              {value[0]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>}
      {token&&click!==null&&<ShowDevice info={click}/>}
      {token&&areas===null&&<div className="homeHeight" style={{marginTop:"100px"}}>
        <div className="hero-section">
          <div className="hero-text">
            <i className="fas fa-home icon"></i>
            <h1>Device not found</h1>
            <p>Please Add Device</p>
            <Link to="/addDevice" className="addDevice">Add Device</Link>
          </div>
        </div>
        
      </div>}
      {!token &&
        <div className="homeHeight min-vh-100">
        <div className="hero-section">
          <div className="hero-text">
            <i className="fas fa-home icon"></i>
            <h1>Welcome to Termosense</h1>
            <p>Your Advanced Smart Home System</p>
          </div>
        </div>
        <div className="container about-section">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>About Termosense</h2>
              <p>Termosense is an advanced smart home system that monitors and notifies you of temperature, humidity, and other environmental factors in your home in real-time. This way, you can always keep your home's comfort and security under control. With our user-friendly interface, you can easily track all data, make necessary adjustments, and optimize your home's environment. Make your home smarter and safer with Termosense.</p>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}
