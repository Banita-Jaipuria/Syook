const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the name'],
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'Please add a email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },

    role: {
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer',
    },

    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false,
    },

    city: {
      type: String,
      required: [true, 'Please provide the city name'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Encrypt password using bryptjs
CustomerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
CustomerSchema.methods.getSignedJwtToken = function () {
  const payload = { id: this._id, city: this.city, name: this.name };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match User Entered password to hashed password in DB
CustomerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;
