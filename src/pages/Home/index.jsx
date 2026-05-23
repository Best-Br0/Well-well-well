import Header from "../../components/Header"
import Achievements from "./components/Achievements"

export default function Home() {
    return (
        <>
            <Header title="Главная" />
            <div className="home_wrapper">
                <Achievements />
            </div>
        </>
    )
}
