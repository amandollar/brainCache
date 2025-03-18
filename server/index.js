import express from 'express'
import dotenv from 'dotenv';
import connnectDb from './config/database.js';
import userRouter from './route/userRoute.js';


//Configurations
const app = express();
dotenv.config();
const PORT = process.env.PORT  || 8090;


//Connection
connnectDb();

//Middleware

app.use(express.json());


//Routes
app.use('/api/user',userRouter);


//Home Route
app.get('/',(req,res)=>res.send('Root is groot'));


app.listen(PORT,()=>console.log(`App started at port ${PORT}`));