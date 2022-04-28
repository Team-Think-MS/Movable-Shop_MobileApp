const express=require('express');
const router= express.Router();
const {database}=require('../config/helpers');



/* GET ALL PRODUCTS */
router.get('/',function(req,res){
   database.table('product')
   .withFields(['id','name','image','price','countInStock','description'])
   .getAll().then(product =>{
      if(product){
         res.json({product});
      }else{
         res.json({message: 'NO PRODUCT FOUND'});
      }
   }).catch(err=>res.json(err));
});


/* GET ONE PRODUCT MATCHING ID */
router.get('/:prodId',(req,res)=>{
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
});



/*GET ALL PRODUCTS FROM ONE CATEGORY */
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
});


module.exports=router;