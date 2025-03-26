import React, { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router'

const Customers = () => {
    const navigate = useNavigate()
    const handleAddNewCustomer = () => {
        navigate('/addcustomers')
        }
    
    const handleEditCustomer = () => {
      navigate('/editcustomer')
    }
    
    const [customers, setCustomers] = useState([])
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const fetchCustomers = async () => {
        try {
            const response = await fetch(`${apiUrl}/customers`)
            if (response.ok) {
                const data = await response.json()
                setCustomers(data)
            } else {
                console.error('Failed to fetch customers')
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }
    useEffect(() => {
        fetchCustomers()
    }, [])
      
      
  


    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Customers</h1>
          <button onClick={handleAddNewCustomer} className="btn btn-l">
            Add New Customer
          </button>
        </div>
        <div className="overflow-x-auto"></div>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>JO#</th>
              <th>Name</th>
              <th>Barangay</th>
              <th>Plan</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <th>{customer.joNumber}</th>
                <td>
                  {customer.firstName} {customer.middleName} {customer.lastName}
                </td>
                <td>{customer.barangay}</td>
                <td>{customer.plan}</td>
                <td>{customer.dueDate}</td>
                <td>
                  <button 
                  onClick={handleEditCustomer}
                  className="btn btn-dash btn-success mr-1">Edit</button>
                  <button 
                  className="btn btn-soft btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}


export default Customers