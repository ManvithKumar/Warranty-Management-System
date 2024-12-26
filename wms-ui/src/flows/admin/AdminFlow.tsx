import {Routes,Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import ProductDetails from './pages/ProductDetails'

const AdminFlow = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<AdminDashboard/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
      </Route>
    </Routes>
  )
}

export default AdminFlow