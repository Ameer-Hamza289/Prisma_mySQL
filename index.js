// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const productRoutes =require('./routes/productRoutes');
const bodyParser=require('body-parser');

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/products',productRoutes);

app.listen(process.env.APP_PORT,()=>{
    console.log(`Server is listening at port ${process.env.APP_PORT}`);
})