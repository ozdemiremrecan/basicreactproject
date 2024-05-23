import { useEffect, useState } from "react";
import { useRouteLoaderData, Link } from "react-router-dom";
import "./Home.css"
export default function Home() {
  const token = useRouteLoaderData("root");
  const [areas, setAreas] = useState([]);
  useEffect(() => {
    fetch("http://154.53.180.108:8080/api/userdevices", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token })
    }).then(response => response.json()).then(data => setAreas(data))
  }, [token])
  return (
    <>
      {token && <nav className="navbar navbar-expand-lg bg-body-tertiary mt-5" style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              asdasdasdasd
              {areas.devices && Object.keys(areas.devices).forEach((key, index) => {
                <a href="">key</a>
              })}
            </ul>
          </div>
        </div>
      </nav>}

      {!token &&
        <div class="min-vh-100">
        <div class="hero-section">
          <div class="hero-text">
            <i class="fas fa-home icon"></i>
            <h1>Welcome to Termosense</h1>
            <p>Your Advanced Smart Home System</p>
          </div>
        </div>
    
        <div class="container about-section">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
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
