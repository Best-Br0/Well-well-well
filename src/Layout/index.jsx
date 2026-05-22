import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Layout() {


    return (
        <>
            <div className="body">
                <Sidebar />
                <div className="Main">
                    <Outlet />
                </div>
            </div>
        </>
    )
}