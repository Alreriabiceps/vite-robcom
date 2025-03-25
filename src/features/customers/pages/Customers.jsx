import React from 'react'
import { useNavigate } from 'react-router'

const Customers = () => {
    const navigate = useNavigate()
    const handleAddNewCustomer = () => {
        navigate('/addcustomers')
        }
    const [filter, setFilter] = React.useState(null);

    const handleFilterChange = (filterValue) => {
      setFilter(filterValue);
    };

    const filteredData = [
      { id: 1, name: "Cy Ganderton", barangay: "Mapalad", plan: 999, dueDate: "2023-09-15" },
      { id: 2, name: "Hart Hagerty", barangay: "Camba", plan: 999, dueDate: "2023-09-30" },
      { id: 3, name: "Brice Swyre", barangay: "Mesulo", plan: 999, dueDate: "2023-09-15" },
      { id: 4, name: "Brice Swyre", barangay: "San Mateo", plan: 999, dueDate: "2023-09-30" },
      { id: 5, name: "Brice Swyre", barangay: "Plazang Luma", plan: 999, dueDate: "2023-09-20" },
    ].filter((customer) => {
      if (filter === "15th") {
        return customer.dueDate.endsWith("-15");
      } else if (filter === "30th") {
        return customer.dueDate.endsWith("-30");
      }
      return true;
    });

    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Customers</h1>
        <form className="filter">
          <input
          className="btn btn-square"
          type="reset"
          value="×"
          onClick={() => handleFilterChange(null)}
          />
          <input
          className="btn"
          type="radio"
          name="frameworks"
          aria-label="30th"
          onClick={() => handleFilterChange("30th")}
          />
          <input
          className="btn"
          type="radio"
          name="frameworks"
          aria-label="15th"
          onClick={() => handleFilterChange("15th")}
          />
        </form>
        <button
          onClick={handleAddNewCustomer}
          className="btn btn-l"
        >
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
          </tr>
          </thead>
          <tbody>
          {filteredData.map((customer) => (
            <tr key={customer.id}>
            <th>{customer.id}</th>
            <td>{customer.name}</td>
            <td>{customer.barangay}</td>
            <td>{customer.plan}</td>
            <td>{customer.dueDate}</td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
    );
}


export default Customers