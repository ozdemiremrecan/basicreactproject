import { useEffect,useState } from "react"
import { Form, useRouteLoaderData } from "react-router-dom"
import DeleteDevice from "../pages/DeleteDevice";

export default function ShowDevice({info}) {
    const [data,setData]=useState(null)
    const token=useRouteLoaderData("root");
    const copyDevice=[];
    useEffect(()=>{
        fetch("http://154.53.180.108:8080/api/sensordata",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({token:token,deviceMac:info[1]})
        }).then(response=>response.json()).then(data=>{
            Object.keys(data[info[1]][0]).forEach((key,index)=>{
                copyDevice.push([key,data[info[1]][0][key]])
            })
            setData(copyDevice)
        }).catch(err=>console.error(err))
    },[info])
  return (
    <>
        <div style={{paddingLeft:"100px"}} >
            <div className="container text-center mt-5">
                <div className="row">
            {data&&data.map((device)=>(
                        <div className="col-4">
                            <div className="card bg-c-blue order-card">
                                <div className="card-block">
                                    <h6 className="mb-5">{device[0]}</h6>
                                    <p className="mb-0">{device[1]}</p>
                                </div>
                            </div>
                        </div>
            ))}
                <DeleteDevice mac={data&&data[7][1]}/>
                </div>                
            </div>
        </div>
    </>
  )
}
