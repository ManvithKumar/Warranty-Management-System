import {Routes,Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'

const AdminFlow = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminDashboard/>}/>
    </Routes>
  )
}

export default AdminFlow