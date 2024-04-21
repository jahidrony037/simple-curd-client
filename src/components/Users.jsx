import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const Users = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);
  //   console.log(users);

  const handleDeleteUser = (id) => {
    // console.log("amare click marse", id);
    const deleteUser = async () => {
      const res = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      //   console.log(result);
      if (result.deletedCount === 1) {
        alert("user Delete Successfully");
        const remainingUsers = users.filter((user) => user._id !== id);
        setUsers(remainingUsers);
      }
    };
    deleteUser();
  };

  return (
    <div>
      <Navbar />
      <h2>users: {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}{" "}
          <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          <Link to={`/users/${user._id}`}>Update User</Link>
        </p>
      ))}
    </div>
  );
};

export default Users;
