import Navbar from "../navbar/Navbar";
import { useForm } from "react-hook-form";
import { addUser } from "../../redux/features/addUser/addUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const { dataArray } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(dataArray?.length, "dataArray dataArray");

  const onSubmit = (data) => {
    const addUserData = {
      ...data,
      id: dataArray?.length + 1,
    };
    dispatch(addUser(addUserData))
      .unwrap()
      .then(() => {
        reset();
        navigate("/users");
      });
  };
  return (
    <>
      <Navbar />
      <div className="form mx-40 mt-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            {" "}
            <label>Name</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("name", { required: true })}
            />{" "}
            {errors.name && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Username</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("username", { required: true })}
            />{" "}
            {errors.username && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Email</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />{" "}
            {errors.email && (
              <span style={{ color: "red" }}>Invalid email address</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Street</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("address.street", { required: true })}
            />{" "}
            {errors.address?.street && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Suite</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("address.suite", { required: true })}
            />{" "}
            {errors.address?.suite && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>City</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("address.city", { required: true })}
            />{" "}
            {errors.address?.city && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Zipcode</label>{" "}
            <input
              type="number"
              className="border ml-4 border-black"
              {...register("address.zipcode", { required: true })}
            />{" "}
            {errors.address?.zipcode && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Latitude</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("address.geo.lat", { required: true })}
            />{" "}
            {errors.address?.geo?.lat && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Longitude</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("address.geo.lng", { required: true })}
            />{" "}
            {errors.address?.geo?.lng && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Phone</label>{" "}
            <input
              type="number"
              className="border ml-4 border-black"
              {...register("phone")}
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Website</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("website")}
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Company Name</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("company.name", { required: true })}
            />{" "}
            {errors.company?.name && (
              <span style={{ color: "red" }}>This field is required</span>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Catch Phrase</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("company.catchPhrase")}
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label>BS</label>{" "}
            <input
              className="border ml-4 border-black"
              {...register("company.bs")}
            />{" "}
          </div>{" "}
          <button className="bg-gray-500 p-2 text-white mt-2" type="submit">
            Submit
          </button>{" "}
        </form>
      </div>
    </>
  );
};

export default AddUser;
