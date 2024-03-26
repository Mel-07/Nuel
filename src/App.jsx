import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import Header from "./components/header/Header";
import Layout from "./Layout";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const routers = createBrowserRouter([
  {
    element:<Layout/>,
    index: true
  }
])

function App() {

  return (
    <>
    <RouterProvider router={routers} />
    </>
  )
}

export default App
