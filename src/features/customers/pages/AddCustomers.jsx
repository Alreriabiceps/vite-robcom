import React from 'react';
import { useNavigate } from 'react-router';

const AddCustomers = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/customers');
    }
return (
    <div>
        <div className="flex flex-col items-center justify-center h-full mt-10">
            <fieldset className="fieldset w-full max-w-4xl bg-base-200 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend">Customer Information</legend>
                <h2 className="text-lg font-bold mb-2">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                    <div>
                        <label className="fieldset-label">JO Number</label>
                        <input type="text" className="input w-full " placeholder="JO Number" />
                    </div>
                    <div>
                        <label className="fieldset-label">First Name</label>
                        <input type="text" className="input w-full" placeholder="First Name" />
                    </div>
                    <div>
                        <label className="fieldset-label">Middle Name</label>
                        <input type="text" className="input w-full" placeholder="Middle Name" />
                    </div>
                    <div>
                        <label className="fieldset-label">Last Name</label>
                        <input type="text" className="input w-full" placeholder="Last Name" />
                    </div>
                    <div>
                        <label className="fieldset-label">Mobile#</label>
                        <input type="text" className="input w-full" placeholder="Mobile#" />
                    </div>
                    <div>
                        <label className="fieldset-label">Email</label>
                        <input type="text" className="input w-full" placeholder="Email" />
                    </div>
                </div>

                <h2 className="text-lg font-bold mb-2 mt-5">Address Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="fieldset-label">Barangay</label>
                        <input type="text" className="input w-full" placeholder="Barangay" />
                    </div>
                    <div>
                        <label className="fieldset-label">Town/Municipality</label>
                        <input type="text" className="input w-full" placeholder="Town/Municipality" />
                    </div>
                    <div>
                        <label className="fieldset-label">Province</label>
                        <input type="text" className="input w-full" placeholder="Province" />
                    </div>
                    <div>
                        <label className="fieldset-label">Landmark</label>
                        <input type="text" className="input w-full" placeholder="Landmark" />
                    </div>
                </div>

                <h2 className="text-lg font-bold mb-2 mt-5">Installation Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="fieldset-label">Plan</label>
                        <select className="select w-full">
                            <option>Basic</option>
                            <option>Premium</option>
                            <option>Enterprise</option>
                        </select>
                    </div>
                    <div>
                        <label className="fieldset-label">Date Installed</label>
                        <input type="date" className="input w-full" placeholder="Date Installed" />
                    </div>
                    <div>
                        <label className="fieldset-label">Due Date</label>
                        <select className="select w-full">
                            <option>Select Due Date</option>
                            <option>15th</option>
                            <option>30th</option>
                        </select>
                    </div>
                    <div>
                        <label className="fieldset-label">Installer</label>
                        <input type="text" className="input w-full" placeholder="Installer" />
                    </div>
                    <div>
                        <label className="fieldset-label">NAP Location</label>
                        <input type="text" className="input w-full" placeholder="NAP Location" />
                    </div>
                    <div>
                        <label className="fieldset-label">Power</label>
                        <input type="text" className="input w-full" placeholder="Power" />
                    </div>
                    <div>
                        <label className="fieldset-label">FOC Length</label>
                        <input type="text" className="input w-full" placeholder="FOC Length" />
                    </div>
                </div>

                <input
                onClick={handleSubmit}
                type="submit" value="Submit" className="btn w-24 mt-7" />
            </fieldset>
        </div>
    </div>
);
};

export default AddCustomers;