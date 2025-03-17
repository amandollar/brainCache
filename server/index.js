import express from 'express'
import dotenv from 'dotenv';
import connnectDb from './config/database.js';


//Configurations
const app = express();
dotenv.config();
const PORT = process.env.PORT  || 8090;


//Connection
connnectDb();

//Middleware

app.use(express.json());


//Home Route
app.get('/',(req,res)=>res.send('Root is groot'));


app.listen(PORT,()=>console.log(`App started at port ${PORT}`));