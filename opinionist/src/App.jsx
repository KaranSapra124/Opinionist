import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Ui/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Admin from "./pages/Admin";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/feedback",
          element: <Feedback />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);
  return (
    <>
      <ToastContainer style={{ zIndex: 9999 }} />
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default App;
