import React from 'react';

const Billing = () => {
  return (
    <>
    <div>
        <div className="flex flex-col items-center justify-center h-full mt-10">
            <fieldset className="fieldset w-full max-w-4xl bg-base-200 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend">Billing</legend>
                <h2 className="text-lg font-bold mb-2">Billing Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                    <div>
                        <label className="fieldset-label">JO#</label>
                        <input type="text" className="input w-full" placeholder="JO#" />
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
                        <label className="fieldset-label">Address</label>
                        <input type="text" className="input w-full " placeholder="Address" />
                    </div>
                    <div>
                        <label className="fieldset-label">Bill</label>
                        <input type="text" className="input w-full" placeholder="Bill" />
                    </div>
                    <div>
                        <label className="fieldset-label">OR/GCASH</label>
                        <input type="text" className="input w-full" placeholder="OR/GCASH" />
                    </div>
                    <div>
                        <label className="fieldset-label">Contact Number</label>
                        <input type="text" className="input w-full" placeholder="Contact Number" />
                    </div>
                    <div>
                        <label className="fieldset-label">Plan</label>
                        <select className="select w-full" >
                            <option>Select Plan</option>
                            <option>999</option>
                            <option>1199</option>
                        </select>
                    </div>
                </div>                
                <input type="submit" value="Submit" className="btn w-24 mt-7" />
            </fieldset>
        </div>
    </div>
    </>
  );
};

export default Billing;