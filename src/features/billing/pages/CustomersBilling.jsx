import React, { useState, useEffect } from 'react';

const CustomersBilling = () => {
    const [customers, setCustomers] = useState([]);
    const [filter, setFilter] = useState('15'); // Default filter is '15'

    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch(`${apiUrl}/customers`);
                if (response.ok) {
                    const data = await response.json();
                    setCustomers(data);
                } else {
                    console.error('Failed to fetch customers');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCustomers();
    }, [apiUrl]);

    const filteredCustomers = customers.filter(
        (customer) => customer.dueDate === filter
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Customers Billing</h1>
            <div className="mb-4">
                <label className="mr-2">Filter by Due Date:</label>
                <select
                    className="select select-bordered"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="15">15th</option>
                    <option value="30">30th</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>JO Number</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers.map((customer) => (
                            <tr key={customer.joNumber}>
                                <td>{customer.joNumber}</td>
                                <td>
                                    {customer.firstName} {customer.lastName}
                                </td>
                                <td>{customer.mobile}</td>
                                <td>{customer.email}</td>
                                <td>{customer.dueDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomersBilling;