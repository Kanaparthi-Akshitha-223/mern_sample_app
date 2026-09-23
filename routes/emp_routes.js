let express=require("express");
let router=express.Router();
let bcrypt=require('bcrypt');
let User=require("../models/users");

router.post("/register",async (req, res) => {
  let data={
    ...req.body,
    password: await bcrypt.hash(req.body.password, 10)
  };
  let newUser=new User(data);
  let result=await newUser.save();
  res.status(201).send(result);
});

router.post("/login",async (req, res) => {
  let existingUser=await User.findOne({email:req.body.email});
  if(existingUser){
    let passmatch=await bcrypt.compare(req.body.password,existingUser.password);
    if(passmatch){
      res.send("Login successful");
    }else{
      res.send("password invalid");
    }
  }else{
    res.send("Email not found");
  }
});

router.get("/viewtasks", (req, res) => {
  res.send("View Tasks page called");
});

router.get("/viewtodo", (req, res) => {
    res.send("View ToDo page called");  
});

router.put("/updateprofile", (req, res) => {
    res.send("Update Profile page called");
});

module.exports = router;