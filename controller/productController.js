// import PrismaClient from '@prisma/client';
const {PrismaClient}=require('@prisma/client')

const prisma=new  PrismaClient();


//all products
 const getAllProducts=async(req,res)=>{
    try {
        const response=await prisma.product.findMany();
        res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

//get product specifically by id
 const getProductById=async(req,res)=>{
    try {
        const response=await prisma.product.findUnique({
            where:{
                id:Number(req.params.id)
            }
        })
        res.status(200).json(response);
        
    } catch (error) {
        res.status(404).json(error);
    }
}

//add product

 const addProduct=async(req,res)=>{
   ;
 //console.log(req.body);
    try {
       const product=await prisma.product.create({
            data:{
                name: req.body.name,
                price:req.body.price
            }
        })
        res.status(200).json(product);
        
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
}


//update the product
 const updateProduct=async(req,res)=>{
    // console.log(req.body);
    try {
        const product=await prisma.product.update({
            where:{
                id:Number(req.params.id)
            },
            data:{
                name:req.body.name,
                price:req.body.price
            }
        })
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
}

//delete product
 const deleteProduct=async(req,res)=>{
    try {
        const updatedProduct=await prisma.product.delete({
            where:{
                id:Number(req.params.id)
            }
        })
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports={getAllProducts,getProductById,addProduct,updateProduct,deleteProduct}