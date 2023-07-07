// import express from 'express';
const express=require('express');
const {getAllProducts,getProductById,addProduct,updateProduct,deleteProduct}=require('../controller/productController');

const router=express.Router();

router.get('/',getAllProducts)
router.get('/:id',getProductById);
router.post('/add',addProduct);
router.put('/update/:id',updateProduct);
router.delete('/del/:id',deleteProduct);

// export default router;
module.exports=router;
