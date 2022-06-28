const express=require('express');
//const router= express.Router();
const {database}=require('../config/helpers');


const app=express();

//GET ALL CATEGORIES 
//  /api/category
app.post('/create',async(req,res)=>{
    const nickName = req.body.nickname;
    try {
       const result = await database.query("INSERT INTO nicknames (nickname) VAKUES(?)", [nickName]);
       console.log("response", result);
      
       
    } catch (e) {
       throw e;
       
    }
 });

 app.get("/nicknames",async(req,res)=>{

    try {
        const result = await database.query("SELECT * FROM nicknames");
        res.send(result);
        
    } catch (error) {
        throw error;
        
    }
 })

 
 module.exports=app;