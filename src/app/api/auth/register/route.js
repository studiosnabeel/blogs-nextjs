import User from '@/models/user';
import { connect } from 'mongoose';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

//Create a POST asynchronous request method here so that user can send the request in json format with the name, email and password which we get from the User model imported above in line 1
export const POST = async (request) => {
  const { name, email, password } = await request.json();

  //We call this function to connect to Mongodb. You can find this function in utils/db
  connect();

  //We encrypt our password with the help of bcrypt library npm i bcryptjs
  const hashedPassword = await bcrypt.hash(password, 5);
  
  //then we simply create a new user and save it in the try catch block
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('User has been created', { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
