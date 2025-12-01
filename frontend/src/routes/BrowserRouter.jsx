import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "./Home";
import NotFound from "../components/NotFound";
import LoginPage from "./Login";
import SignUp from "./Signup";
import NotFound404 from "../components/404";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path:"/notfound",
        element:<NotFound404 />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default Routes;
