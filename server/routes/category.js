const express=require('express');
//const router= express.Router();
const {database}=require('../config/helpers');


const app=express();

//GET ALL CATEGORIES 
//  /api/category
app.get('/',async(req,res)=>{
    try {
       const result = await database.query("SELECT * FROM category");
       res.send(result);
      
       
    } catch (e) {
       throw e;
       
    }
 })

 
 module.exports=app;