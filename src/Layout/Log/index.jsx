import LeftSideLogin from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function LogIn() {

    return (
        <>
            <div className="Login_page">
                <LeftSideLogin />
                <RightSide />
            </div>
        </>
    )
}