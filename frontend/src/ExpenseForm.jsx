import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExpenseForm() {
  const [formData, setFormData] = useState({
    daysWorked: "",
    date: "",
    name: "",
    address: "",
    siteAddress: "",
    transport: "car",
    carMiles: "",
    totalMileage: "0 days x 0 miles/day x £ 0.45 = £ 0",
    valuesClaimed: "",
    subsistance: "Hours away from home",
    subsistanceCalculation: "£ 0.00",
    declaration: false,
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    nationalInsurance: "",
    otherExpensesName: "",
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTransportChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      transport: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Submit form data to API or log it
    console.log(formData);
  };

  return (
    <div className="container mt-4 text-center w-75">
      <button className="btn btn-primary me-2">Data Report</button>
      <h2 className="text-center my-3">Expense Form</h2>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-dark me-2">PPS Expense Form</button>
        <button className="btn btn-secondary">Submit</button>
      </div>
      <form onSubmit={handleFormSubmit} className="">
        <div className="row mb-3 ">
          <div className="col-md-6 text-start">
            <label htmlFor="daysWorked" className="form-label ">
              Days Worked
            </label>
            <input
              type="number"
              className="form-control"
              id="daysWorked"
              placeholder="Days Worked"
              value={formData.daysWorked}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 text-start">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 text-start">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="siteAddress" className="form-label">
              Site Address
            </label>
            <input
              type="text"
              className="form-control"
              id="siteAddress"
              placeholder="Site Address"
              value={formData.siteAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="col-md-4 text-start">
            <label htmlFor="transport" className="form-label">
              Method of Transport
            </label>
            <select
              className="form-select"
              id="transport"
              value={formData.transport}
              onChange={handleTransportChange}
            >
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
            </select>
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="carMiles" className="form-label">
              Car Miles
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="carMiles"
                placeholder="0"
                value={formData.carMiles}
                onChange={handleChange}
              />
              <span className="input-group-text">/ day</span>
            </div>
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="totalMileage" className="form-label">
              Total Mileage Claim
            </label>
            <input
              type="text"
              className="form-control"
              id="totalMileage"
              placeholder="0 days x 0 miles/day x £ 0.45 = £ 0"
              value={formData.totalMileage}
              disabled
            />
          </div>
        </div>
        <div className="row mb-3"></div>
        <div className="row mb-3">
          {/* <div className="col-md-12">
            <label htmlFor="valuesClaimed" className="form-label">
              Values Claimed
            </label>
            <input
              type="number"
              className="form-control"
              id="valuesClaimed"
              placeholder="Please insert value claimed."
              value={formData.valuesClaimed}
              onChange={handleChange}
            />
          </div> */}
        </div>
        <div className="row mb-3">
          <div className="col-md-12 d-flex align-items-center justify-content-between">
            <label className="form-label me-2 fs-3 fw-normal">
              Other Expenses: 0
            </label>
            <button type="button" className="btn btn-success">
              Add Expenses
            </button>
          </div>
        </div>
        <div>
          <div className="row mb-3">
            {" "}
            <div className="col-md-6 text-start">
              <div>
                <label htmlFor="siteAddress" className="form-label">
                  Other Expense Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="otherexpensesname"
                  placeholder="Other Expense Name"
                  value={formData.otherExpensesName}
                  onChange={handleChange}
                />
              </div>
              <div className="text-start">
                <label htmlFor="carMiles" className="form-label">
                  Car Miles
                </label>
                <div className="input-group">
                  <span className="input-group-text">£</span>
                  <input
                    type="number"
                    className="form-control"
                    id="carMiles"
                    placeholder="0"
                    value={formData.carMiles}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 text-start">
              <label htmlFor="otherexpensesdescription" className="form-label">
                Other Expense Description
              </label>
              <textarea
                className="form-control"
                placeholder="Other Expense Description"
                id="otherexpensesdescription"
              ></textarea>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 text-start">
              {" "}
              <label for="formFile" class="form-label ">
                Default file input example
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div className="col-md-6 mt-auto">
              <button type="button" className="btn btn-danger w-100">
                Remove Expenses
              </button>
            </div>
          </div>
          <hr />
        </div>
        <div className="row mb-3">
          <div className="col-md-4 text-start">
            <label htmlFor="subsistance" className="form-label">
              Subsistance
            </label>
            <input
              type="number"
              className="form-control"
              id="subsistance"
              placeholder="Hours away from home"
              value={formData.subsistance}
            />
          </div>
          <div className="col-md-4 text-start">
            <label className="form-label">Under 8 hours</label>
            <input
              type="text"
              className="form-control"
              placeholder="£ 5.00 /day"
              value="£ 5.00 /day"
              disabled
            />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="subsistanceCalculation" className="form-label">
              Subsistance Calculation
            </label>
            <input
              type="text"
              className="form-control"
              id="subsistanceCalculation"
              placeholder="£ 0.00"
              value={formData.subsistanceCalculation}
              disabled
            />
          </div>
        </div>
        <div className="form-check mb-3 text-start">
          <input
            type="checkbox"
            className="form-check-input"
            id="declaration"
            checked={formData.declaration}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="declaration">
            I declare that the information submitted is true and correct. Any
            missing information or errors may result in the delay of the claim
            been processed.
          </label>
        </div>
        <div className="text-center mb-3">
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </div>
        <div className="w-50 m-auto">
          <div className="row mb-3 text-start ">
            <div className="">
              <label htmlFor="firstName" className="form-label">
                Your First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Please insert your First Name."
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="surname" className="form-label">
                Your Surname
              </label>
              <input
                type="text"
                className="form-control"
                id="surname"
                placeholder="Please insert your Surname."
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3 text-start">
            <div className="">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Please insert your Email."
              />
            </div>
            <div className="text-start">
              <label htmlFor="phoneNumber" className="form-label">
                Your Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                placeholder="Please insert your Phone Number."
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-12 text-start">
              <label htmlFor="nationalInsurance" className="form-label">
                National Insurance Number
              </label>
              <input
                type="text"
                className="form-control"
                id="nationalInsurance"
                placeholder="No spaces Allowed. 9 digits only. Use capital letters. Ex: JG8686985E"
              />
            </div>
          </div>
          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary">
              Submit Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
