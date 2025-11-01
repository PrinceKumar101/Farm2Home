import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "./Home";

const Routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            }
        ]
    }
])
export default Routes