const express = require("express");
const router = express.Router();
const User = require("../models/userModel")
const bcrypt=require('bcryptjs');
router.post("/register", async(req, res) => {
  
    const {name , email , password} = req.body
    const user=await User.find({email})
    
     if(user.length>0){
        res.send('already registered')
     }else{
        const newUser = new User({name , email , password})
    try {
       await newUser.save()
        res.send('User Registered successfully')
    } catch (error) {
         return res.status(400).json({ message: error });
    }
     }
});


router.post("/login", async(req, res) => {

    const {email , password} = req.body

    try {
        
        const user = await User.find({email,password})
        const userexist=await User.findOne({email:email})
        bcrypt.compare(password, userexist.password, function(err, result) {
            if (err) {
              // handle error
            } else if (result) {
              const currentUser = {
                    name : userexist.name , 
                    email : userexist.email, 
                    isAdmin : userexist.isAdmin, 
                    _id : userexist._id
                }
                res.send(currentUser);
            } else {
              return res.status(400).send({ error: 'User does not exist'});
            }
          });


    } catch (error) {
           return res.status(400).json({ message: 'Something went weong' });
    }
  
});


router.get("/getallusers", async(req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deleteuser", async(req, res) => {
  
    const userid = req.body.userid

    try {
        await User.findOneAndDelete({_id : userid})
        res.send('User Deleted Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});



module.exports = router