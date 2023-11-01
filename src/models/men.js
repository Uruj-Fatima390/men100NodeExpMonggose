const express=require("express");
const { default: mongoose } = require("mongoose");

const menSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }

})

const MenRanking=new mongoose.model("MenRanking",menSchema);
module.exports=MenRanking;