import React from 'react'
import Header from '../../../../components/Header'
import DeteilsEmployee from "../DeteilsEmployee/components/index"

export default function DeteilsEmployeePage() {
    return (
        <div>
            <Header title="Управление сотрудниками" />
            <DeteilsEmployee />
        </div>
    )
}