import { Outlet } from "react-router"
import Navbar from "../components/NavBar"

const MainLayout = ()=>{
    return (
        <>
        <div className=" sticky top-0">
            <Navbar />
        </div>
        <div className=" overflow-x-auto">
            <Outlet/>
        </div>
        </>
    )
}
export default MainLayout