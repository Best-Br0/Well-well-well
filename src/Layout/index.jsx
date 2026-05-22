import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header";
export default function Layout() {


    return (
        <>
            <div className="body">
                <Sidebar />
<<<<<<< HEAD
                <div className="Main">
=======
                <div className="main">
>>>>>>> 53567146022786db03aaa70e3a4f7ed8748df503
                    <Outlet />
                </div>
            </div>
        </>
    )
}