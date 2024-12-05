import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Loader from "../loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../../redux/features/addUser/addUserSlice";

const Users = () => {
  const { dataArray, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchUsers());
      setShowLoader(false);
    }, 3000); // 3-second delay
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleDelete = async (id) => {
    setShowLoader(true); // Show loader when delete button is clicked
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second delay
    await dispatch(deleteUser(id)).unwrap();
    dispatch(fetchUsers());
    setShowLoader(false); // Hide loader after fetching data
  };

  return (
    <>
      <Navbar />
      {showLoader ? (
        <Loader />
      ) : (
        <div className="card-container grid grid-cols-2 gap-6 mx-40 mt-6">
          {dataArray.map((elem) => (
            <div key={elem.id}>
              <Card elem={elem} handleDelete={handleDelete} />
            </div>
          ))}
        </div>
      )}
    </>
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
        <strong>Address:</strong> {address?.street}, {address?.suite}, {address?.city}, {address?.zipcode}
      </p>
      <p>
        <strong>Geo:</strong> <strong>Lat</strong> {address?.geo.lat}, <strong>Lng</strong> {address?.geo.lng}
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
