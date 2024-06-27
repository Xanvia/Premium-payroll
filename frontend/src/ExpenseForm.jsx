import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExpenseForm() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Expense Form</h2>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary me-2">Data Report</button>
        <button className="btn btn-dark me-2">PPS Expense Form</button>
        <button className="btn btn-secondary">Submit</button>
      </div>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="daysWorked" className="form-label">
              Days Worked
            </label>
            <input
              type="number"
              className="form-control"
              id="daysWorked"
              placeholder="Days Worked"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input type="date" className="form-control" id="date" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="siteAddress" className="form-label">
              Site Address
            </label>
            <input
              type="text"
              className="form-control"
              id="siteAddress"
              placeholder="Site Address"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="transport" className="form-label">
              Method of Transport
            </label>
            <select className="form-select" id="transport">
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="carMiles" className="form-label">
              Car Miles
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="carMiles"
                placeholder="0"
              />
              <span className="input-group-text">/ day</span>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="totalMileage" className="form-label">
              Total Mileage Claim
            </label>
            <input
              type="text"
              className="form-control"
              id="totalMileage"
              placeholder="0 days x 0 miles/day x £ 0.45 = £ 0"
              disabled
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="valuesClaimed" className="form-label">
              Values Claimed
            </label>
            <input
              type="number"
              className="form-control"
              id="valuesClaimed"
              placeholder="Please insert value claimed."
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12 d-flex align-items-center">
            <label className="form-label me-2">Other Expenses: 0</label>
            <button type="button" className="btn btn-success">
              Add Expenses
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="subsistance" className="form-label">
              Subsistance
            </label>
            <input
              type="text"
              className="form-control"
              id="subsistance"
              placeholder="Hours away from home"
              disabled
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Under 8 hours</label>
            <input
              type="text"
              className="form-control"
              placeholder="£ 5.00 /day"
              disabled
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="subsistanceCalculation" className="form-label">
              Subsistance Calculation
            </label>
            <input
              type="text"
              className="form-control"
              id="subsistanceCalculation"
              placeholder="£ 0.00"
              disabled
            />
          </div>
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="declaration"
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
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Your First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Please insert your First Name."
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="surname" className="form-label">
              Your Surname
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="Please insert your Surname. "
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
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
          <div className="col-md-12">
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
      </form>
    </div>
  );
}

export default ExpenseForm;
