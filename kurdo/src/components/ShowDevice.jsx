import { useEffect,useState } from "react"
import { useRouteLoaderData } from "react-router-dom"

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
            Object.keys(data.info[1]).forEach((key,index)=>{
                console.log(key)
            })
        }).catch(err=>console.error(err))
    },[info])
  return (
    <>
        <div style={{paddingLeft:"100px"}}>
            {data&&data[info[1]]!==undefined&&console.log(data)}
        </div>
    </>
  )
}
