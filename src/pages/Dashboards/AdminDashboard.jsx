import React from 'react'
import NavBar from '../../components/Header/NavBar';
import CrudCategories from './../../components/dashboard/admin/categories/CrudCategories';

function AdminDashboard()
{
  return (
    <div>
      <NavBar />
      <CrudCategories />
    </div>
  )
}

export default AdminDashboard
