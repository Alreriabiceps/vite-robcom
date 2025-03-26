import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Defaultlayout from './layouts/Defaultlayout.jsx';
import Dashboard from './features/dashboard/pages/Dashboard.jsx';
import Profile from './features/profile/pages/Profile.jsx';
import Settings from './features/profile/pages/Settings.jsx';
import Smsreminder from './features/sms/pages/SMSReminder.jsx';
import Customers from './features/customers/pages/Customers.jsx';
import AddCustomers from './features/customers/pages/AddCustomers.jsx';
import CustomersBilling from './features/billing/pages/CustomersBilling.jsx';
import EditCustomer from './features/customers/pages/EditCustomer.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Defaultlayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/smsreminder" element={<Smsreminder />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/addcustomers" element={<AddCustomers />} />
        <Route path="/customersbilling" element={<CustomersBilling />} />
        <Route path="/editcustomer" element={<EditCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
