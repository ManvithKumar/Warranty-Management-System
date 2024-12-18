import AdminFlow from './flows/admin/AdminFlow'
import CustomerFlow from './flows/customer/CustomerFlow'
import CustomerCareFlow from './flows/customer-care/CustomerCareFlow'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/customer/*' element={<CustomerFlow/>}/>
        <Route path='/customer-care/*' element={<CustomerCareFlow/>}/>
        <Route path='/admin/*' element={<AdminFlow/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
