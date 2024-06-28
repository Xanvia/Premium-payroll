import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = 10;

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

adminSchema.pre("save", function (next) {
  let admin = this;

  if (!admin.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(admin.password, salt, function (err, hash) {
      if (err) return next(err);

      admin.password = hash;
      next();
    });
  });
});

export const Admin = mongoose.model("Admin", adminSchema);
