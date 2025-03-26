import React from 'react';

const Dashboard = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const billing = [
    { id: 1, amount: '$120.00', date: '2025-03-01' },
    { id: 2, amount: '$80.00', date: '2025-03-15' },
  ];

  return (
    <div className="p-6 grid grid-rows-3 gap-6">
      <div className="bg shadow-md rounded-lg p-6 row-span-1">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Dashboard Overview</h1>
        <p>Welcome to the dashboard! Here you can view customer and billing information.</p>
      </div>

      <div className="grid grid-cols-2 gap-6 row-span-1">
        {customers.map((customer) => (
          <div key={customer.id} className="bg shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700">Customer Info</h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 row-span-1">
        {billing.map((bill) => (
          <div key={bill.id} className="bg- shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700">Billing Info</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;