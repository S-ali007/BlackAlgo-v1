import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request) {
  // const users=[{
  //     name : 'ali',
  //     phone:'4324235345',
  //     course:'js'
  // },
  // {
  //     name : 'rahman',
  //     phone:'7324235345',
  //     course:'js'
  // },
  // {
  //     name : 'saif',
  //     phone:'9324235345',
  //     course:'js'
  // },
  // {
  //     name : 'abrar',
  //     phone:'1324235345',
  //     course:'js'
  // }]

  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create users ",
    });
  }

  return NextResponse.json(users);
}
export async function POST(request) {
  // fetch user detail from fetch
  const { name, email, password } = await request.json();

  try {
    // create user object with user model

    const user = new User({
      name,
      email,
      password,
    });

    const createUser = await user.save();
    return NextResponse.json(createUser, {
      message: "user added successfully!!!",
      status: 201,
    });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create users ",
    });
  }
}
// export function DELETE (request){
//     console.log('delete api');
//     return NextResponse.json({
//         message:"deleted",
//         status:'true'
//     },{
//         status:201 ,statusText:"changed Text"
//     })

// }
// export function PUT (){

// }
