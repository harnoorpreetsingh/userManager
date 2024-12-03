import Navbar from "../navbar/Navbar";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  const checkUsers=()=>{
    navigate("/users")
  }
  const addUser=()=>{
    navigate("/adduser")
  }

  return (
    <div>
      <Navbar />
      <div className="info mx-40 mt-12 flex flex-col gap-4">
        <h1 className="text-2xl" >Welcome to User Manager!</h1>
        <p className="mt-4">
          User Manager is your go-to application for managing user information
          efficiently and effortlessly. Our intuitive interface and powerful
          features make it easy to keep track of all your users in one place.
        </p>

        <h2 className="mt-4  text-xl">Features</h2>
        <ul>
          <li className="mt-4">
            {" "}
            <strong> User List </strong>: View a comprehensive list of all
            users, complete with their names, emails, and phone numbers.
          </li> 
          <button onClick={checkUsers} className='bg-slate-500 text-white p-1 rounded-lg mt-2 mb-2'>
        Click Here to access the User List
      </button>

          <li>
            {" "}
            <strong> Add New Users </strong>: Quickly add new users with our
            simple and user-friendly form.
            
          </li>
          <button onClick={addUser} className='bg-slate-500 text-white p-1 rounded-lg mt-2 mb-2'>
        Click Here to Add a new User
      </button>
          <li>
            {" "}
            <strong> Edit User Information </strong>: Update user details with
            ease to ensure your records are always up-to-date.
          </li>
          <li>
            {" "}
            <strong> Delete Users </strong>: Remove users from the list with a
            single click.
          </li>
          <li>
            {" "}
            <strong> Navigation </strong>: Seamlessly navigate between the Home
            and Add User pages using our intuitive navigation bar.
          </li>
        </ul>

        <h2 className="mt-4  text-xl">Getting Started:</h2>

        <ul>
          <li className="mt-4">
            {" "}
            <strong> Home Page </strong>: Start by viewing the list of users
            fetched from our API. Each user entry displays their name, email,
            and phone number.
          </li>
          <li className="">
            {" "}
            <strong> Add User Page </strong>: Use the form to add new users.
            Ensure all required fields are filled out correctly to avoid any
            errors.
          </li>
          <li className="">
            {" "}
            <strong> Manage Users </strong>: Edit or delete users as needed to
            keep your user list accurate and up-to-date.
          </li>
        </ul>

        <h2 className="mt-4  text-xl">Why UserManager?</h2>

        <ul>
          <li className="mt-4">
            {" "}
            <strong> Centralized Management </strong>: Keep all your user
            information in one place.
          </li>
          <li className="">
            {" "}
            <strong> Easy to Use </strong>: Our application is designed with
            simplicity and efficiency in mind.
          </li>
          <li className="">
            {" "}
            <strong> Reliable</strong>: Built with robust error handling and
            validation to ensure smooth operation.
          </li>
        </ul>

        <h2 className="mt-4 text-center  text-xl font-bold text-white bg-gray-600 p-4 mb-4">
          Explore UserManager today and experience the ease of managing your
          user information like never before!{" "}
        </h2>
      </div>
    </div>
  );
};

export default Home;
