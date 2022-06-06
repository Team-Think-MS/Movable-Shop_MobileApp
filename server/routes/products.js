const express=require('express');
//const router= express.Router();
const {database}=require('../config/helpers');
const bodyParser= require('body-parser');

const app=express();
//-----------------------------
{/**database.execute('SELECT * FROM product').then(result =>{
   console.log(result[0],result[1]);
}).catch(err=>{
   console.log(err);
}) */}

//-----------------------------------------

/* GET ALL PRODUCTS */
app.get('/',async(req,res)=>{
   try{
      const result=await database.query('SELECT * FROM product');
      res.send(result);
   }catch(err){
      throw err;
   }
})


/* GET ONE PRODUCT MATCHING ID */
// /api/products/:prodId
app.get('/:prodId', async(req,res)=>{
   try {
      const result = await database.query("SELECT * FROM product WHERE productId= 'prodId'");
      res.send(result);
      
   } catch (error) {
      throw error;
      
   }
})

/*GET ALL PRODUCTS FROM ONE CATEGORY */
// /api/products/category/:catName

app.get('/category/:catName',async(req,res)=>{
   try {
      const result = await async("SELECT p.productName,p.picture,p.price,p.stockQty,p.description FROM store s, category c, product p WHERE s.categoryId=c.categoryId AND s.storeId=p.storeId AND c.categoryName='catName'");
      res.send(result);
      
   } catch (error) {
      throw error;
      
   }
})


{/** router.get('/',function(req,res){
   database.table('product')
   .withFields(['id','name','image','price','countInStock','description'])
   .getAll().then(product =>{
      if(product){
         res.json({product});
      }else{
         res.json({message: 'NO PRODUCT FOUND'});
      }
   }).catch(err=>res.json(err));
});*/}






{/** router.get('/:prodId',(req,res)=>{
   let productId=req.params.prodId;
   database.table('product')
   .withFields(['id','name','image','price','countInStock','description'])
   .filter({'id':productId})
   .get()
   .then(prod=>{
      console.log(prod);
      if(prod){
         res.status(200).json(prod);
      }else{
         res.json({message:`NO PRODUCT FOUND WITH ID ${productId}`});
      }
   }).catch(err=> res.json(err));
});*/}



{/**
router.get('/category/:catName',(req,res)=>{
   let cat_name=req.params.catName;
   database.table('praoduct as p')
   .join([{
      table:'category as c',
      on:` c.catId = p.catId WHERE c.catName LIKE '%${cat_name}%'`
   }
])
.withFields(['c.catName as category',
'p.name',
'p.image',
'p.price',
'p.countInStock',
'p.description'])
.getAll()
.then(products=>{
   if(products.length>0){
      res.status(200).json({
         count:products.length,
         allProducts:products
      });
   }else{
      res.json({message: `No products found matching the category ${cat_name}`});
   }
}).catch(err=>res.json(err));
}); */}



module.exports=app;