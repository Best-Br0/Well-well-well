import BackList from "../../../../components/BackList";
import Header from "../../../../components/Header";
import ItemDetails from "./components/ItemDetails";

export default function ItemDetailsPage() {

    return (
        <>
            <Header title={"Просмотр предмета"} />
            <div className="item_details_page">
                <BackList />
                <ItemDetails />
            </div>
        </>
    )
}