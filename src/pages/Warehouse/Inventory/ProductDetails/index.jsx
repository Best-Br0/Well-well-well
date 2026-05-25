import BackList from "../../../../components/BackList";
import Header from "../../../../components/Header";
import ProductDetails from "./components/ProductDetails";

export default function ProductDetailsPage() {

    return (
        <>
            <Header title={"Просмотр Товара"} />
            <div className="product_details_page">
                <BackList />
                <ProductDetails />
            </div>

        </>
    )
}