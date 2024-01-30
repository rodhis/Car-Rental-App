import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import DriverForm from "./Pages/Home/DriverForm/DriverForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "driver-form",
        element: <DriverForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
