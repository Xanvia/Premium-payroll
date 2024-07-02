import mongoose from "mongoose";

const Schema = mongoose.Schema;

const otherExpenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  car_miles: {
    type: Number,
    required: true,
  },

  file: {
    type: String,
    required: true,
  },
});

const expensesSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  daysWorked: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  siteAddress: {
    type: String,
    required: true,
  },
  methodOfTransport: {
    type: String,
    required: true,
    enum: ["CAR", "Bus", "Train"],
  },
  carMiles: {
    type: Number,
    required: true,
  },
  totalMileageClaim: {
    type: Number,
    required: true,
  },
  subsistence: {
    type: Number,
    required: true,
  },
  under8Hours: {
    type: Number,
    required: false,
  },
  subsistenceTotal: {
    type: Number,
    required: false,
  },
  otherExpenses: [otherExpenseSchema],
});

export const Expenses = mongoose.model("Expenses", expensesSchema);
