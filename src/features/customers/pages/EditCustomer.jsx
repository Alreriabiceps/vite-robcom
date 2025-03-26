import { useState } from 'react'
import { useNavigate } from 'react-router';

const EditCustomer = () => {
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
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${apiUrl}/customers`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          navigate("/customers");
        } else {
          console.error("Failed to add customer");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center h-full mt-10">
            <fieldset className="fieldset w-full max-w-4xl bg-base-200 border border-base-300 p-4 rounded-box">
              <legend className="fieldset-legend">Customer Information</legend>
              <h2 className="text-lg font-bold mb-2">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                <div>
                  <label className="fieldset-label">JO Number</label>
                  <input
                    type="text"
                    name="joNumber"
                    className="input w-full "
                    placeholder="JO Number"
                    value={formData.joNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="input w-full"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    className="input w-full"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="input w-full"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Mobile#</label>
                  <input
                    type="text"
                    name="mobile"
                    className="input w-full"
                    placeholder="Mobile#"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h2 className="text-lg font-bold mb-2 mt-5">
                Address Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="fieldset-label">Barangay</label>
                  <input
                    type="text"
                    name="barangay"
                    className="input w-full"
                    placeholder="Barangay"
                    value={formData.barangay}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Town/Municipality</label>
                  <input
                    type="text"
                    name="town"
                    className="input w-full"
                    placeholder="Town/Municipality"
                    value={formData.town}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Province</label>
                  <input
                    type="text"
                    name="province"
                    className="input w-full"
                    placeholder="Province"
                    value={formData.province}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    className="input w-full"
                    placeholder="Landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h2 className="text-lg font-bold mb-2 mt-5">
                Installation Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="fieldset-label">Plan</label>
                  <select
                    className="select w-full"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                  >
                    <option hidden dissabled selected>
                      Select Plan
                    </option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="fieldset-label">Date Installed</label>
                  <input
                    type="date"
                    name="dateInstalled"
                    className="input w-full"
                    placeholder="Date Installed"
                    value={formData.dateInstalled}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Due Date</label>
                  <select
                    className="select w-full"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                  >
                    <option hidden dissabled selected>
                      Select Due Date
                    </option>
                    <option value="15">15th</option>
                    <option value="30">30th</option>
                  </select>
                </div>
                <div>
                  <label className="fieldset-label">Installer</label>
                  <input
                    type="text"
                    name="installer"
                    className="input w-full"
                    placeholder="Installer"
                    value={formData.installer}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">NAP Location</label>
                  <input
                    type="text"
                    name="napLocation"
                    className="input w-full"
                    placeholder="NAP Location"
                    value={formData.napLocation}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">Power</label>
                  <input
                    type="text"
                    name="power"
                    className="input w-full"
                    placeholder="Power"
                    value={formData.power}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="fieldset-label">FOC Length</label>
                  <input
                    type="text"
                    name="focLength"
                    className="input w-full"
                    placeholder="FOC Length"
                    value={formData.focLength}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn w-24 mt-7">
                Submit
              </button>
            </fieldset>
          </div>
        </form>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center h-full mt-10">
            <fieldset className="fieldset w-full max-w-4xl bg-base-200 border border-base-300 p-4 rounded-box">
              <legend className="fieldset-legend">Customer Information</legend>
              <h2 className="text-lg font-bold mb-2">Pictures</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input type="file" className="file-input" />
                  <label className="fieldset-label">Max size 2MB</label>
                </fieldset>
              </div>

              <button type="submit" className="btn w-24 mt-7">
                Submit
              </button>
            </fieldset>
          </div>
        </form>
      </div>
      </>
  )
}

export default EditCustomer