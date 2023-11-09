import mongoose, { Schema } from "mongoose";

          const UserSchema  =new Schema({
            name:String,
            email:{
                type:String,
                unique:[true,"Email already exist"],
                required:[true,"Email is required"],
            },
            password:{
                type:String,
                required:[true,"Password is required"]
            }
            });

            export const User=mongoose.models.users || mongoose.model("users",UserSchema);