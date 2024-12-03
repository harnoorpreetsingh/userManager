import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUser,
  fetchUsers,
} from "../../redux/features/addUser/addUserSlice";

const Users = () => {
  const { dataArray } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // const [Data, setData] = useState([])

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(dataArray, "dataArray");

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    console.log("deletedddd");
    // setData()
  };

  return (
    <div>
      <Navbar />
      <div className="card-container grid grid-cols-2 gap-6 mx-40 mt-6 ">
        {dataArray &&
          dataArray.map((elem) => (
            <Card key={elem.id} handleDelete={handleDelete} elem={elem} />
          ))}
      </div>
    </div>
  );
};

const Card = ({ elem, handleDelete }) => {
  const { id, name, username, email, address, phone, website, company } = elem;

  return (
    <div className="card bg-gray-700 p-4 rounded-lg text-white flex flex-col gap-1">
      <h4>
        <strong>Id:</strong> {id}
      </h4>
      <h4>
        <strong>Name:</strong> {name}
      </h4>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Address:</strong> {address.street}, {address.suite},{" "}
        {address.city}, {address.zipcode}
      </p>
      <p>
        <strong>Geo:</strong> <strong>Lat</strong> {address.geo.lat},{" "}
        <strong>Lng</strong> {address.geo.lng}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Website:</strong> {website}
      </p>
      <p>
        <strong>Company:</strong> {company.name}
      </p>
      <p>
        <strong>Catch Phrase:</strong> {company.catchPhrase}
      </p>
      <p>
        <strong>BS:</strong> {company.bs}
      </p>

      <button
        onClick={() => handleDelete(id)}
        className="bg-red-600 mt-4 rounded-lg text-white p-2"
      >
        Delete User
      </button>
    </div>
  );
};

export default Users;
