const mongoose = require("mongoose");
const bcrypt=require('bcryptjs')

const userSchema = mongoose.Schema({
    name : {type: String , require},
    email : {type: String , require},
    password : {type: String , require},
    isAdmin : {type: Boolean , require , default: false},
} , {
    timestamps : true,
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,10);
    }
    next();
})

const User=mongoose.model('users',userSchema);
module.exports=User;