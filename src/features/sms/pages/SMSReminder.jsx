import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SMSReminderPage = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [selectedDueDate, setSelectedDueDate] = useState(15);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/customers?dueFilter=true");
        const data = await response.json();
        console.log("Fetched Customers:", data); // ✅ Check if data is coming
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
  
    fetchCustomers();
  }, []);

  useEffect(() => {
    const filtered = customers.filter(customer =>
      customer.dueDate === String(selectedDueDate) // Compare as string
    );
    setFilteredCustomers(filtered);
    setSelectedCustomers([]); // Reset selection when filtering
    setSelectAll(false);
  }, [customers, selectedDueDate]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(filteredCustomers.map(c => c._id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectCustomer = (id) => {
    setSelectedCustomers(prev =>
      prev.includes(id) ? prev.filter(custId => custId !== id) : [...prev, id]
    );
  };

  const handleSendSMS = async () => {
    if (selectedCustomers.length === 0) {
      alert('Please select at least one customer.');
      return;
    }
    if (!message) {
      alert('Please enter a message.');
      return;
    }

    try {
      const recipients = filteredCustomers
        .filter(c => selectedCustomers.includes(c._id))
        .map(c => c.mobile);

      await axios.post('http://localhost:5000/api/send-sms', {
        recipients,
        message,
      });

      setSuccess(true);
      setMessage('');
      setSelectedCustomers([]);
      setSelectAll(false);
    } catch (error) {
      console.error('Error sending SMS:', error);
      alert('Failed to send SMS.');
    }
  };

  return (
    <div className="p-6  flex flex-col items-center">
      <div className=" shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-xl font-bold mb-4 text-gray-800">SMS Reminder</h1>
        
        {/* DaisyUI Toggle Filter */}
        <div className="mb-4 flex space-x-2">
          <button
            className={`btn ${selectedDueDate === 15 ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedDueDate(15)}
          >
            Due on 15th
          </button>
          <button
            className={`btn ${selectedDueDate === 30 ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedDueDate(30)}
          >
            Due on 30th
          </button>
        </div>

        {/* Customers Table */}
        <div className="overflow-x-auto border border-base-content/5 bg-base-100 rounded-box">
  <table className="table w-full">
  <thead>
  <tr>
    <th className="w-12">
      <input type="checkbox" className="checkbox" checked={selectAll} onChange={handleSelectAll} />
    </th>
    <th className="w-24">JO Number</th>
    <th className="w-24">Name</th>
    <th className="w-10">Due Date</th>
    <th className="w-32">Mobile</th>
  </tr>
</thead>

  </table>

  {/* Scrollable customer list with No Data message */}
  <div className="max-h-60 overflow-y-auto">
    <table className="table w-full">
    <tbody>
  {filteredCustomers.length > 0 ? (
    filteredCustomers.slice(0, 5).map(customer => (
      <tr key={customer._id}>
        <td className="w-12">
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedCustomers.includes(customer._id)}
            onChange={() => handleSelectCustomer(customer._id)}
          />
        </td>
        <td className="w-24">{customer.joNumber}</td>
        <td className="w-30">{customer.firstName} {customer.lastName}</td>
        <td className="w-18">{customer.dueDate}</td>
        <td className="w-32">{customer.mobile}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center text-gray-500">No customers due on this date</td>
    </tr>
  )}
</tbody>
    </table>
  </div>
</div>

        {/* SMS Sending Form */}
        <div className="mt-6 p-4 border border-base-300 rounded-box bg-base-200">
          <h2 className="text-lg font-semibold mb-2">Send SMS</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="textarea w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary w-full"
            onClick={handleSendSMS}
          >
            Send SMS
          </button>
        </div>

        {success && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
            SMS sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default SMSReminderPage;
