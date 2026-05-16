import Header from "../../../../components/Header";
import CreateEmployeeForm from "../CreateEmployee/components";

export default function CreateEmployeePage() {
    return (
        <>
            <Header title="Добавить сотрудника" />
            <main className="create_employee_page_content">
                <CreateEmployeeForm />
            </main>
        </>
    );
}