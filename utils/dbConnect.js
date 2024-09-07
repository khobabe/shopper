import mongoose from "mongoose"

export default function DbConnect(){
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongo db");
    }
    catch(err){
        console.error("failed to connect to mongo db",err);
    }
}