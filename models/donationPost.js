const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
​
const Schema = mongoose.Schema;
​
const DonationPostSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["Food", "Clothing", "Furniture"]
  },
  description: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    require: true
  },
  imageURL: {
    type: String,
    default: "../images/default-image.jpg"
    //required: true
  },
  date: {
    type: Date,
    required: true
  },
  _requestee: {
    type: ObjectId,
    default: ,
    ref: "User"
  },
  _volunteer: {
    type: ObjectId,
    ref: "User"
  },
  _creator: {
    type: ObjectId,
    ref: "User"
  },
  status: {
    type: String,
    enum: ["posted", "requested", "pickedup"]
  },
    timestamps: true
});
​
const DonationPost = mongoose.model("donationPost", donationSchema);
​
module.exports = DonationPost;