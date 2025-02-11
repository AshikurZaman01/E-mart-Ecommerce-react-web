import { Outlet } from "react-router"
import Navbar from "./Components/Pages/Navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  )
}

export default App