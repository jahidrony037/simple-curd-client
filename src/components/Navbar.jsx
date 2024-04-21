import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Add User </Link>
      <Link to="/users">All Users </Link>
    </div>
  );
};

export default Navbar;
