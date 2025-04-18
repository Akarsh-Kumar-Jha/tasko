const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        index:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    tasks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Task"
        }
    ],
    image:{
        type:String
    }
});

module.exports = mongoose.model("User",userSchema);