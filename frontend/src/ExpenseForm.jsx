import React, { useState, useField } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
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
  });

  return (
    <Formik
      initialValues={{
        daysWorked: "",
        date: "",
        name: "",
        address: "",
        siteAddress: "",
        transport: "car",
        carMiles: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <div className="container mt-4 text-center w-75">
          <button className="btn btn-primary me-2">Data Report</button>
          <h2 className="text-center my-3">Expense Form</h2>
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-dark me-2">PPS Expense Form</button>
            <button
              className="btn btn-secondary"
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </button>
          </div>
          <Form>
            <div className="row mb-3">
              <div className="col-md-6 text-start">
                <label htmlFor="daysWorked" className="form-label">
                  Days Worked
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="daysWorked"
                  placeholder="Days Worked"
                  min="0"
                  max="7"
                />
                <ErrorMessage
                  name="daysWorked"
                  component="div"
                  className="error-message text-danger"
                />
              </div>
              <div className="col-md-6 text-start">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <Field
                  type="date"
                  className="form-control"
                  name="date"
                  min={formatDateToYYYYMMDD(oneWeekAgo)}
                  max={formatDateToYYYYMMDD(today)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 text-start">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <Field
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="siteAddress" className="form-label">
                  Site Address
                </label>
                <Field
                  type="text"
                  className="form-control"
                  name="siteAddress"
                  placeholder="Site Address"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 text-start">
                <label htmlFor="transport" className="form-label">
                  Method of Transport
                </label>
                <Field
                  as="select"
                  name="transport"
                  className="form-select"
                  id="transport"
                >
                  <option value="car">Car</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                </Field>
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="carMiles" className="form-label">
                  Car Miles
                </label>
                <div className="input-group">
                  <Field
                    type="number"
                    className="form-control"
                    name="carMiles"
                    placeholder="0"
                    min="0"
                  />
                  <span className="input-group-text">/ day</span>
                </div>
              </div>
              <div className="col-md-4 text-start">
                <label htmlFor="totalMileage" className="form-label">
                  Total Mileage Claim
                </label>
                <p>0 days x 0 miles/day x £ 0.45 = £ 0</p>
                {/* This can be dynamically calculated based on Formik values if needed */}
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ExpenseForm;
