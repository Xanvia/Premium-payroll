import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

function ExpenseForm() {
  const [expenseCount, setExpenseCount] = useState(0);

  const handleAddExpense = () => {
    setExpenseCount(expenseCount + 1);
  };

  const handleRemoveExpense = () => {
    setExpenseCount(expenseCount - 1);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const today = new Date();
  const oneWeekAgo = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );

  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const validationSchema = Yup.object({
    daysWorked: Yup.number().required("Days worked is required"),
    date: Yup.date().required("Date is required"),
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    siteAddress: Yup.string().required("Site address is required"),
    transport: Yup.string().required("Transport method is required"),
    carMiles: Yup.number().required("Car miles is required"),
    // expenseName: Yup.string().required("Please insert the Expense Name"),
    // file: Yup.string().required("Please upload the Expense Receipt"),
  });

  const formik = useFormik({
    initialValues: {
      daysWorked: "",
      date: "",
      name: "",
      address: "",
      siteAddress: "",
      transport: "car",
      carMiles: "",
      expenseName: "",
      expenseValue: "",
      expenseDescription: "",
      file: "",
      subsistance: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setCurrentStep(2);
    },
  });

  const totalMilage = formik.values.daysWorked * formik.values.carMiles * 0.45;

  let hourText = "";
  let hourValue = "";

  if (formik.values.subsistance < 8) {
    hourText = "Under 8 Hours";
    hourValue = "5";
  } else if (formik.values.subsistance < 13) {
    hourText = "8 Hours - 12 Hours";
    hourValue = "10";
  } else {
    hourText = "Over 12 Hours";
    hourValue = "15";
  }

  const renderExpenseForms = () => {
    let forms = [];
    for (let i = 0; i < expenseCount; i++) {
      forms.push(
        <div key={i}>
          {
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
                      name="expenseName"
                      placeholder="Expense Name"
                      value={formik.values.expenseName}
                      onChange={formik.handleChange}
                    />
                    {/* {formik.errors.expenseName &&
                      formik.touched.expenseName && (
                        <div className="error-message text-danger">
                          {formik.errors.expenseName}
                        </div>
                      )} */}
                  </div>
                  <div className="text-start">
                    <label htmlFor="carMiles" className="form-label">
                      Other Expenses Value
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">£</span>
                      <input
                        type="number"
                        className="form-control"
                        id="carMiles"
                        placeholder="0"
                        value={formik.values.expenseValue}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-start">
                  <label
                    htmlFor="otherexpensesdescription"
                    className="form-label"
                  >
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
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    value={formik.values.file}
                    onChange={formik.handleChange}
                  />
                  {/* {formik.errors.file && formik.touched.file && (
                    <div className="error-message text-danger">
                      {formik.errors.file}
                    </div>
                  )} */}
                </div>
                <div className="col-md-6 mt-auto">
                  <button
                    type="button"
                    className="btn btn-danger w-100"
                    onClick={handleRemoveExpense}
                  >
                    Remove Expenses
                  </button>
                </div>
              </div>
              <hr />
            </div>
          }
        </div>
      );
    }
    return forms;
  };

  return (
    <div className="container mt-4 text-center w-75">
      <button className="btn btn-primary me-2">Data Report</button>
      <h2 className="text-center my-3">Expense Form</h2>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-dark me-2">PPS Expense Form</button>
        <button
          className="btn btn-secondary"
          onClick={formik.handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {currentStep == 1 && (
          <>
            <div className="row mb-3">
              <div className="col-md-6 text-start">
                <label htmlFor="daysWorked" className="form-label">
                  Days Worked
                </label>
                <input
                  type="number"
                  className={`form-control ${
                    formik.errors.daysWorked &&
                    formik.touched.daysWorked &&
                    "border border-danger"
                  }`}
                  name="daysWorked"
                  placeholder="Days Worked"
                  min="0"
                  max="7"
                  value={formik.values.daysWorked}
                  onChange={formik.handleChange}
                />
                {formik.errors.daysWorked && formik.touched.daysWorked && (
                  <div className="error-message text-danger">
                    {formik.errors.daysWorked}
                  </div>
                )}
              </div>
              <div className="col-md-6 text-start">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  min={formatDateToYYYYMMDD(oneWeekAgo)}
                  max={formatDateToYYYYMMDD(today)}
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
                {formik.errors.date && formik.touched.date && (
                  <div className="error-message text-danger">
                    {formik.errors.date}
                  </div>
                )}
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
                  name="name"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                  <div className="error-message text-danger">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                {formik.errors.address && formik.touched.address && (
                  <div className="error-message text-danger">
                    {formik.errors.address}
                  </div>
                )}
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="siteAddress" className="form-label">
                  Site Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="siteAddress"
                  placeholder="Site Address"
                  value={formik.values.siteAddress}
                  onChange={formik.handleChange}
                />
                {formik.errors.siteAddress && formik.touched.siteAddress && (
                  <div className="error-message text-danger">
                    {formik.errors.siteAddress}
                  </div>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 text-start">
                <label htmlFor="transport" className="form-label">
                  Method of Transport
                </label>
                <select
                  name="transport"
                  className="form-select"
                  id="transport"
                  value={formik.values.transport}
                  onChange={formik.handleChange}
                >
                  <option value="car">Car</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                </select>
                {formik.errors.transport && formik.touched.transport && (
                  <div className="error-message text-danger">
                    {formik.errors.transport}
                  </div>
                )}
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="carMiles" className="form-label">
                  Car Miles
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    name="carMiles"
                    placeholder="0"
                    min="0"
                    value={formik.values.carMiles}
                    onChange={formik.handleChange}
                  />
                  <span className="input-group-text">/ day</span>
                </div>
                {formik.errors.carMiles && formik.touched.carMiles && (
                  <div className="error-message text-danger">
                    {formik.errors.carMiles}
                  </div>
                )}
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="totalMileage" className="form-label">
                  Total Mileage Claim
                </label>
                <p>{`${formik.values.daysWorked} days x ${formik.values.carMiles} miles/day x £ 0.45 = £ ${totalMilage}`}</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12 d-flex align-items-center justify-content-between">
                <label className="form-label me-2 fs-3 fw-normal">
                  Other Expenses: {expenseCount}
                </label>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleAddExpense}
                >
                  Add Expenses
                </button>
              </div>
            </div>
            {renderExpenseForms()}
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
                  min={0}
                  value={formik.values.subsistance}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-md-4 text-start">
                <label className="form-label">{hourText}</label>

                <p>{`£ ${hourValue}.00 /day`}</p>
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="subsistanceCalculation" className="form-label">
                  Subsistance Calculation
                </label>
                <p>£ 0.00</p>
              </div>
            </div>
            <div className="form-check mb-3 text-start">
              <input
                type="checkbox"
                className="form-check-input"
                id="declaration"
                checked
              />
              <label className="form-check-label" htmlFor="declaration">
                I declare that the information submitted is true and correct.
                Any missing information or errors may result in the delay of the
                claim been processed.
              </label>
            </div>
            <div className="text-center mb-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={formik.handleSubmit}
              >
                Continue
              </button>
            </div>
          </>
        )}
        {currentStep == 2 && (
          <>
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
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
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
                    // value={formData.surname}
                    // onChange={handleChange}
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
          </>
        )}
      </form>
    </div>
  );
}

export default ExpenseForm;
