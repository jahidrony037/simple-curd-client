import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const handSubmitUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    const postData = async () => {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const result = await res.json();
      if (result.insertedId) {
        alert("User Added Successfully");
        form.reset();
      }
    };
    postData();
  };
  return (
    <>
      <Navbar />
      <h1>Simple CURD System</h1>
      <form onSubmit={handSubmitUser}>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="Add USER" />
      </form>
    </>
  );
}

export default App;
