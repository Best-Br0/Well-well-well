import Header from "../../components/Header"
import Achievements from "./components/Achievements"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import Statistics from "./components/Statistics";
import Top from "./components/Top"
import Order from "./components/Order";
import Rent from "./components/Rent"

export default function Home() {
    return (
        <>
            <Header title="Главная" />
            <div className='home_wrapper'>
                <Achievements Icon={TrendingUpIcon} SmallIcon={TrendingUpIcon} height="12,5%" text="Выручка за месяц" success="1,245,600 сом" box="achievements_percent" />
                <Achievements Icon={ShoppingBagOutlinedIcon} SmallIcon={TrendingUpIcon} height="+8,2%" text="Количество заказов" success="482" box="achievements_percent" />
                <Achievements Icon={VpnKeyOutlinedIcon} SmallIcon={TrendingDownOutlinedIcon} height="-3,1%" text=" Коллекций в аренде" success="24" box="achievements_regres" />
                <Achievements Icon={LayersOutlinedIcon} SmallIcon={TrendingUpIcon} height="+2,4%" text="Остаток тканей" success="78%" box="achievements_percent" />
            </div>
            <div className="home_wrapper2">
                <Statistics />
                <Top />
            </div>
            <div className="home_wrapper3">
                <Order />
                <Rent />
            </div>
        </>
    )
}
