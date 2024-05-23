import { useEffect,useState } from "react";
import { useRouteLoaderData, Link } from "react-router-dom";

export default function Home() {
  const token=useRouteLoaderData("root");
  const [areas,setAreas]=useState([]);
  useEffect(()=>{
    fetch("http://154.53.180.108:8080/api/userdevices",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({token:token})
  }).then(response=>response.json()).then(data=>setAreas(data))
  },[token])
  return (
    <>
      {token&&<nav className="navbar navbar-expand-lg bg-body-tertiary mt-5" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              asdasdasdasd
              {areas.devices&&Object.keys(areas.devices).forEach((key,index)=>{
                <a href="">key</a>
              })}
            </ul>
          </div>
        </div>
      </nav>}

      {!token&&
        <div className="container w-75 mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Welcome to Termosense</h1>
              <div>
                <p>Termosense, evinizdeki sıcaklık, nem ve diğer çevresel faktörleri anlık olarak izleyen ve size bildiren gelişmiş bir akıllı ev sistemidir. Bu sayede, evinizin konforunu ve güvenliğini her zaman kontrol altında tutabilirsiniz. Kullanıcı dostu arayüzümüz ile tüm verileri kolayca takip edin, gerekli ayarları yapın ve evinizin ortamını optimize edin. Termosense ile evinizi daha akıllı ve daha güvenli hale getirin.</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
