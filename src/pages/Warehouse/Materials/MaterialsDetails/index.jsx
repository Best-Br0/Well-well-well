import BackList from "../../../../components/BackList";
import Header from "../../../../components/Header";
import MaterialDetails from "./components/Details";

export default function MaterialsDetailsPage() {


    return (
        <>
            <Header title={"Просмотр материала"} />
            <div className="materials_details_page">
                <BackList />
                <MaterialDetails />
            </div>
        </>
    )
}