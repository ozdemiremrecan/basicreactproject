import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./pages/Root"
import Login, {action as loginAction} from "./pages/Login"
import Home from "./components/Home"

function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Root/>,children:[
      {index:true,element:<Home/>},
      {path:"auth",element:<Login/>,action:loginAction}
    ]}
  ])

  return <RouterProvider router={router}/>
}

export default App
