import React from 'react'
import Header from '../../../../components/Header'
import EmployeeManagementList from './components/EmployeeManagementList'

export default function EmployeeManagement() {
  
  return (
    <section className='employeemanagement'>
      <Header title="Управление сотрудниками" />
      <EmployeeManagementList />
    </section>
  )
}