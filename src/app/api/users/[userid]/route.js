import { User } from "@/models/user";
import { NextResponse } from "next/server";
export async function DELETE(request, { params }) {
  console.log(params, "ali");

  const userId = params.userid;
  console.log(userId, "userid");

  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json(
      {
        message: "deleted",
        status: "true",
      },
      {
        status: 201,
        statusText: "changed Text",
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "error to delete",
      status: "false",
    });
  }
}

export async function GET(request, { params }) {
  const userId = params.userid;
  console.log(userId);
  try {
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(
      user,
      {
        message: "getting data ",
      },
      {
        status: 201,
        statusText: "changed Text",
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "getting data ",
      },
      {
        status: 201,
        statusText: "changed Text",
      }
    );
  }
}

// update
export async function PUT(request, { params }) {
  const userId = params.userid;
  const { name, password } = await request.json();

  try {
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;

    const userUpdated = await user.save();
    return NextResponse.json(userUpdated, {
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, {
      message: "error updating ",
    });
  }
}
