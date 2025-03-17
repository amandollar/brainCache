import mongoose from "mongoose";


const connnectDb = async() => {

    try{

        await mongoose.connect(`${process.env.MONGO_URL}/brainCache`);
        console.log("Database successfully connected");

    }catch(error){
        console.log(error);
    }
    
}

export default connnectDb;