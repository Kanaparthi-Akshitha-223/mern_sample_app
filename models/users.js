let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: { 
        type: String,
        enum: ["HR", "EMPLOYEE"]
        
    }
})
let user = mongoose.model("User", userSchema);
module.exports = user;