import { Outlet } from "react-router"

const MainLayout = ()=>{
    return (
        <>
        <div>
            MainLayout Content
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}
export default MainLayout