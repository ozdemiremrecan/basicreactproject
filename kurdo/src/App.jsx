import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./pages/Root"
import Login, {action as loginAction} from "./pages/Login"
import Home from "./components/Home"
import {action as logoutAction} from "./pages/Logout"
import {  tokenLoader } from './util/auth';
import Register,{action as registerAction} from "./pages/Register"
import AddDevice,{action as addDeviceAction} from "./pages/AddDevice"
import ErrorPage from "./pages/Error"


function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Root/>,loader:tokenLoader,id:'root',errorElement:<ErrorPage/>,children:[
      {index:true,element:<Home/>},
      {path:"/addDevice",element:<AddDevice/>,action:addDeviceAction},
      {path:"/auth",element:<Login/>,action:loginAction},
      {path:"/register",element:<Register/>,action:registerAction},
      {path:"logout",action:logoutAction}
    ]}
  ])

  return <RouterProvider router={router}/>
}

export default App
