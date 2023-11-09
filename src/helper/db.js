import mongoose from "mongoose"
import {User} from "../models/user"

export const connectDb=async()=>{
    try {
        
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"black_algo_data"
        })
        console.log("db.....connected",connection)

        // testing
        // const user=new User({
        //     name:"ali",
        //     email:"ali123@gmail.com",
        //     password:"test123@",
        // })
        // await user.save();
        // console.log("user is created")
    } catch (error) {
        console.log("failed to connect with database",error)
    }
}