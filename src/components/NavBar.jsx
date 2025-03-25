import React from 'react'
import { useNavigate } from 'react-router'

const NavBar = () => {
  const navigate = useNavigate();
  const handleGotoProfile = () => {
    navigate("/profile");
  };

  const handleGotoSettings = () => {
    navigate("/settings");
  };

  const handleGotoBilling = () => {
    navigate("/billing");
  };

  const handleGotoCustomers = () => {
    navigate("/customers");
  };

  const handleGotoSMSReminder = () => {
    navigate("/smsreminder");
  };

  const handleGotoDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm p-8 text-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={(e) => e.currentTarget.classList.toggle('bg-gray-200')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> 
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-4 w-64 p-4 shadow">
              <li><a
              onClick={handleGotoBilling}
              >Billing</a></li>
              <li><a
              onClick={handleGotoCustomers}
              >Customer Information</a></li>
              <li><a
              onClick={handleGotoSMSReminder}
              >SMS Reminder</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a
          onClick={handleGotoDashboard}
          className="btn btn-ghost text-3xl">Robcom</a>
        </div>
        <div className="navbar-end">
        <p className="mr-2 text-sm">Russelle Roxas</p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={(e) => e.currentTarget.classList.toggle('bg-gray-200')}>
              <div className="rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-4 w-64 p-4 shadow">
              <li>
                <a
                onClick={handleGotoProfile}
                className="justify-between">
                  Profile
                </a>
              </li>
              <li><a
              onClick={handleGotoSettings}
              >Settings</a></li>
              <li><a
              onClick={handleLogout}
              >Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar