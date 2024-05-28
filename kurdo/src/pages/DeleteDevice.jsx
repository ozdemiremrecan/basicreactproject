import React, { useEffect } from 'react'
import { useRouteLoaderData,useNavigate } from 'react-router-dom'

export default function DeleteDevice({mac}) {
    const navigate=useNavigate();
    const token=useRouteLoaderData("root");
    const deleteFunction=async ()=>{
        await fetch("http://154.53.180.108:8080/api/deleteDevice",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({token:token,deviceMac:mac})
        })
    }
  return (
    <button onClick={()=>{deleteFunction();navigate(0)}} type='button'>Delete</button>
  )
}
