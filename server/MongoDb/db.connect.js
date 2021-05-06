const express=require('express');
const mongoose=require('mongoose');

const uri="mongodb+srv://ankitdb:Singh%40ni%40190@neog-cluster.fs70b.mongodb.net/inventory?retryWrites=true&w=majority"
const MongoConnection=async ()=>{
try{
const mongooseConnect=await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
console.log({sucess:true,message:"Connected to DB"})
}
catch(error){
    console.log({sucess:false,message:error.message})
}
}

module.exports={MongoConnection}
