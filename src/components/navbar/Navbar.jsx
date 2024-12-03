import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <div className="nav p-4 mx-40 bg-slate-500 items-center text-white flex justify-between">
          <div className="left ">
          <Link to="/" >
          User Manager
            </Link>
            
          </div>
          <div className="right flex gap-12">
          <Link to="/users" >
          View Users
            </Link>
          

            <div className="elems flex gap-2">
            <Link to="/adduser" >
            Add User
            </Link>
            
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar