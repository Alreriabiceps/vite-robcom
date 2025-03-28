import React, { useState, useEffect } from 'react';

const CustomersBilling = () => {
    const [customers, setCustomers] = useState([]);
    const [filter, setFilter] = useState('15');
    const [showModal, setShowModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState({ mode: '', amount: '', reference: '' });

    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch(`${apiUrl}/customers`);
                if (response.ok) {
                    const data = await response.json();
                    setCustomers(data.map(customer => ({ ...customer, status: 'unpaid' })));
                } else {
                    console.error('Failed to fetch customers');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCustomers();
    }, [apiUrl]);

    const toggleStatus = (customer) => {
        setSelectedCustomer(customer);
        setShowModal(true);
    };

    const handlePaymentSubmit = () => {
        setCustomers((prevCustomers) =>
            prevCustomers.map((customer) =>
                customer.joNumber === selectedCustomer.joNumber
                    ? { ...customer, status: 'paid' }
                    : customer
            )
        );
        setShowModal(false);
    };

    const sortedCustomers = [...customers]
        .filter((customer) => customer.dueDate === filter)
        .sort((a, b) => (a.status === 'paid' && b.status !== 'paid' ? -1 : 1));

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Customers Billing</h1>
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="mr-4">
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
                    <div>
                        <input
                            type="text"
                            className="input input-bordered mt-6"
                            placeholder="Search by Name or JO Number"
                            onChange={(e) => {
                                const searchTerm = e.target.value.toLowerCase();
                                setCustomers((prevCustomers) =>
                                    prevCustomers.map((customer) => ({
                                        ...customer,
                                        isVisible:
                                            customer.firstName.toLowerCase().includes(searchTerm) ||
                                            customer.lastName.toLowerCase().includes(searchTerm) ||
                                            customer.joNumber.toString().includes(searchTerm),
                                    }))
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>JO Number</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCustomers
                            .filter((customer) => customer.isVisible !== false)
                            .map((customer) => (
                                <tr key={customer.joNumber}>
                                    <td>{customer.joNumber}</td>
                                    <td>{customer.firstName} {customer.lastName}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.dueDate}</td>
                                    <td>
                                        <span className={`inline-block w-3 h-3 rounded-full ${customer.status === 'paid' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </td>
                                    <td className="text-right">
                                        <button
                                            className={`px-2 py-1 rounded ${customer.status === 'paid' ? 'btn btn-secondary' : 'btn btn-accent'}`}
                                            onClick={() => toggleStatus(customer)}
                                        >
                                            {customer.status === 'paid' ? 'Paid' : 'Mark as Paid'}
                                        </button>
                                        <button
                                            className="ml-2 px-2 py-1 rounded btn btn-info"
                                            onClick={() => alert(`Viewing receipt for JO Number: ${customer.joNumber}`)}
                                        >
                                            View Receipt
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-30">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                        <label className="block mb-2">Mode of Payment</label>
                        <input 
                            type="text" 
                            className="input input-bordered w-full mb-4" 
                            value={paymentDetails.mode} 
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, mode: e.target.value })} 
                        />
                        <label className="block mb-2">Amount</label>
                        <input 
                            type="number" 
                            className="input input-bordered w-full mb-4" 
                            value={paymentDetails.amount} 
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, amount: e.target.value })} 
                        />
                        <label className="block mb-2">Reference Number</label>
                        <input 
                            type="text" 
                            className="input input-bordered w-full mb-4" 
                            value={paymentDetails.reference} 
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, reference: e.target.value })} 
                        />
                        <button className="btn btn-primary mr-2" onClick={handlePaymentSubmit}>Confirm Payment</button>
                        <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomersBilling;





