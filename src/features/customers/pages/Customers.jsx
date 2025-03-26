import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Customers = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchCustomers = async () => {
    try {
      const response = await fetch(`${apiUrl}/customers`);
      if (!response.ok) throw new Error("Failed to fetch customers");
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAddNewCustomer = () => navigate("/addcustomers");
  const handleEditCustomer = (id) => navigate(`/editcustomer/${id}`);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/customers/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(await response.text());
      setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer._id !== id));
    } catch (error) {
      console.error("Failed to delete customer:", error);
    }
  };

  // 🔍 Filter customers based on search query
  const filteredCustomers = customers.filter((customer) => {
    const fullName = `${customer.firstName} ${customer.middleName ? customer.middleName + " " : ""}${customer.lastName}`;
    return (
      customer.joNumber.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.mobile.toString().includes(searchQuery)
    );
  });

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-5xl">
        
        {/* Header & Search */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Customers</h1>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search by Name, JO#, or Mobile"
              className="input input-bordered input-sm w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleAddNewCustomer} className="btn btn-sm btn-outline btn-secondary">
              Add New Customer
            </button>
          </div>
        </div>

        {/* Table Wrapper */}
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
          <table className="table w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th>JO#</th>
                <th>Name</th>
                <th>Barangay</th>
                <th>Plan</th>
                <th>Due Date</th>
                <th>Mobile Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr key={customer._id} className="hover">
                    <td>{customer.joNumber}</td>
                    <td>
                      {`${customer.firstName} ${customer.middleName ? customer.middleName + " " : ""}${customer.lastName}`.length > 30
                        ? `${customer.firstName} ${customer.middleName ? customer.middleName + " " : ""}${customer.lastName}`.slice(0, 20) + "..."
                        : `${customer.firstName} ${customer.middleName ? customer.middleName + " " : ""}${customer.lastName}`}
                    </td>
                    <td>{customer.barangay}</td>
                    <td>{customer.plan}</td>
                    <td>{customer.dueDate}</td>
                    <td>{customer.mobile}</td>
                    <td className="text-right">
                      <div className="inline-flex space-x-2">
                        <button onClick={() => handleEditCustomer(customer._id)} className="btn btn-outline btn-info btn-sm">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(customer._id)} className="btn btn-outline btn-error btn-sm">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Customers;
