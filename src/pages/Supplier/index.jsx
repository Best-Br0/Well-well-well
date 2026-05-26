import { Link } from "react-router-dom";


export default function PageSupplier() {

    return <Link to={"/supplier/details/:id"}>Поставщики</Link>
}