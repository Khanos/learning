import dotenv from "dotenv";
import { connect } from 'mongoose';
dotenv.config();
const dbURI = `${process.env.MONGODB_URI}`;
const dbInit = async () => {
    await connect(dbURI);
    console.log('Connection to database established');
}

export default dbInit;