import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB= async ()=>{
   try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(  "this is" ,connectionInstance);
       console.log(`\n mongodb connected: host ${connectionInstance.connection.host}`);// printing kis host pe database connect ho rha hai
       
   }

   catch(error){
       console.error("MONGOBB connection error",error);
       process.exit(1);
   }
   
}

export default connectDB