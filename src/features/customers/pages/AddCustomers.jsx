import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddCustomers = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    joNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    barangay: "",
    town: "",
    province: "",
    landmark: "",
    plan: "",
    dateInstalled: "",
    dueDate: "",
    installer: "",
    napLocation: "",
    power: "",
    focLength: "",
  });

  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const trimmedData = { 
      ...formData, 
      joNumber: Number(formData.joNumber), 
      mobile: Number(formData.mobile) 
    };
  
    console.log("Sending Data:", trimmedData); // Debugging
  
    try {
      const response = await fetch(`${apiUrl}/customers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add customer");
      }
  
      navigate("/customers");
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full mt-10">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-base-200 border border-base-300 p-4 rounded-box">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Customer Information</legend>

          <h2 className="text-lg font-bold mb-2">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["joNumber", "firstName", "middleName", "lastName", "mobile", "email"].map((field) => (
              <div key={field}>
                <label className="fieldset-label">{field.replace(/([A-Z])/g, " $1").trim()}</label>
                <input
                  type="text"
                  name={field}
                  className="input w-full"
                  placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <h2 className="text-lg font-bold mb-2 mt-5">Address Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["barangay", "town", "province", "landmark"].map((field) => (
              <div key={field}>
                <label className="fieldset-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type="text"
                  name={field}
                  className="input w-full"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <h2 className="text-lg font-bold mb-2 mt-5">Installation Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="fieldset-label">Plan</label>
              <select className="select w-full" name="plan" value={formData.plan} onChange={handleChange}>
                <option hidden disabled value="">
                  Select Plan
                </option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="Enterprise">Enterprise</option>
              </select>
            </div>
            <div>
              <label className="fieldset-label">Date Installed</label>
              <input type="date" name="dateInstalled" className="input w-full" value={formData.dateInstalled} onChange={handleChange} />
            </div>
            <div>
              <label className="fieldset-label">Due Date</label>
              <select className="select w-full" name="dueDate" value={formData.dueDate} onChange={handleChange}>
                <option hidden disabled value="">
                  Select Due Date
                </option>
                <option value="15">15th</option>
                <option value="30">30th</option>
              </select>
            </div>
            {["installer", "napLocation", "power", "focLength"].map((field) => (
              <div key={field}>
                <label className="fieldset-label">{field.replace(/([A-Z])/g, " $1").trim()}</label>
                <input
                  type="text"
                  name={field}
                  className="input w-full"
                  placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-outline btn-success w-24 mt-7">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddCustomers;