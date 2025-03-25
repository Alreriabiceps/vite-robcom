import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Defaultlayout from './layouts/Defaultlayout.jsx';
import Dashboard from './features/dashboard/pages/Dashboard.jsx';
import Profile from './features/profile/pages/Profile.jsx';
import Settings from './features/profile/pages/Settings.jsx';
import Billing from './features/dashboard/pages/Billing.jsx';
import Smsreminder from './features/dashboard/pages/SMSReminder.jsx';
import Customers from './features/customers/pages/Customers.jsx';
import AddCustomers from './features/customers/pages/AddCustomers.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Defaultlayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/smsreminder" element={<Smsreminder />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/addcustomers" element={<AddCustomers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
