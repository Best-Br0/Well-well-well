import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function FilterSearch() {

    return (
        <>
            <div className="filter_search">
                <div className="search">
                    <input className="input" type="text" placeholder="Поиск по ID, имени клиента..." />
                    <CiSearch className="icon" />
                </div>
                <div className="filter">
                    <h1 className="title">Фильтер</h1>
                    <FaChevronDown className="icon" />
                </div>
            </div>
        </>
    )
}