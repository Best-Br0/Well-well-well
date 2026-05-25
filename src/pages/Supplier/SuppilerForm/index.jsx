import React from 'react'
import Header from '../../../components/Header'
import AddSupplierForm from "../SuppilerForm/components/index"

export default function SuppplierFormPage() {
    return (
        <>
            <Header title={"Добавить поставщика"}/>
            <AddSupplierForm onBack={() => window.history.back()} />
        </>
    )
}