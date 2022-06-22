const express=require('express');
//const router= express.Router();
const {database}=require('../config/helpers');


const app=express();
//-----------------------------
{/**database.execute('SELECT * FROM product').then(result =>{
   console.log(result[0],result[1]);
}).catch(err=>{
   console.log(err);
}) */}

//-----------------------------------------

/* GET ALL Stores */
// /api/stores/
app.get('/',async(req,res)=>{
   try{
      const result=await database.query('SELECT * FROM  store');
      res.send(result);
   }catch(err){
      throw err;
   }
})


// GET ALL PRODUCTS FROM STORE USING MATCHING ID
// /api/stores/allproducts/:storeId
app.get('/allproducts/:storeId',async(res, req)=>{
    const id= req.params.storeId;
    try {
        const result= await database.query("SELECT * FROM store s, product p WHERE s.storeId = p. storeId AND p.sroreId=?",[id]);
        res.send(result);
        
    } catch (error) {
        throw error;
        
    }
})


module.exports=app;