import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import Users from "./components/Users.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/users/:id",
    element: <UpdateUser />,
    loader: (params) =>
      fetch(`http://localhost:5000/users/${params.params.id}`),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
