import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header";
export default function Layout() {


    return (
        <>
            <div className="body">
                <Sidebar />
                <div className="main">
                    <Outlet />
                </div>
            </div>
        </>
    )
}