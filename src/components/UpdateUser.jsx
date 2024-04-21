import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const UpdateUser = () => {
  const user = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  //   console.log(user);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    // console.log("update user");
    const user = { name, email };
    // console.log(user);

    const updateUser = async () => {
      const res = await fetch(`http://localhost:5000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      });
      const result = await res.json();
      if (result.modifiedCount) {
        alert("user update successfully");
        navigate("/users");
      }
    };
    updateUser();
  };
  return (
    <div>
      <Navbar />
      <h2> {user.name} Page</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="name" defaultValue={user.name} />
        <br />
        <input type="email" name="email" id="" defaultValue={user.email} />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
