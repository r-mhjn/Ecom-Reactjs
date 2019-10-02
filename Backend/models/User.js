const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// TODO: gonna have to add the question id to the user ...to give out the courses by the user
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      houseno: {
        type: String
      },
      locality: {
        type: String
      },
      city: {
        type: String
      },
      pincode: {
        type: String
      },
      sector: {
        type: String
      }
    },
    cart: [
      {
        itemName: {
          type: String
        },
        quantity: {
          type: String
        },
        itemPrice: {
          type: String
        }
      }
    ],
    orders: [
      {
        itemName: {
          type: String
        },
        quantity: {
          type: String
        },
        itemPrice: {
          type: String
        },
        orderedOn: {
          type: Date,
          date: Date.now()
        }
      }
    ],
    password: {
      type: String,
      required: true
    },
    phoneno: {
      type: String,
      required: true,
      maxLength: 10
    }
  },
  {
    timestamps: true
  }
);

module.exports = User = mongoose.model("myUser", UserSchema);
