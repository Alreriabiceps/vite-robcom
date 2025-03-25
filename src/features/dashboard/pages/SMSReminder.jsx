import React, { useState } from 'react';

const SMSReminder = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSendSMS = () => {
    if (!phoneNumber.match(/^\d{10,15}$/)) {
      alert('Please enter a valid phone number (10-15 digits).');
      return;
    }
    if (!message) {
      alert('Please enter a message.');
      return;
    }
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    setSuccess(true);
    
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="p-6 bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-gray-800">SMS Reminder</h1>
        <p className="mb-4 text-gray-600">Send SMS reminders to your customers easily.</p>
        <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Send SMS</legend>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              className="input w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
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
        </fieldset>
        {success && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
            SMS sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default SMSReminder;