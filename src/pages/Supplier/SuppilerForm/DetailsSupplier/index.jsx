import Header from "../../../../components/Header";
import SupplierDetails from "./components/SupplierDetails";
import SupplierOrders from "./components/SupplierOrders";

export default function DetailsSupplier() {



    return (
        <>
            <Header title={"Просмотр поставщика"} />
            <div className="supplier_details_main">
                <SupplierDetails />
                <SupplierOrders />
            </div>
        </>
    )
}