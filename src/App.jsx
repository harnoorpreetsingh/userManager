// import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/Home"
import Users from "./components/pages/Users"
import AddUser from "./components/pages/AddUser"
import NotExists from "./components/pages/NotExists"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="*" element={<NotExists/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/adduser" element={<AddUser/>} />
    </Routes>
    </>
  )
}

export default App
