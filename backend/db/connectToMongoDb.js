import mongoose, { mongo } from "mongoose";

const connectToMongoDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log( 'Database connected successfully');
    } catch (error) {
        console.log( `Error connecting to database: ${error}`);
    }
}

export default connectToMongoDb;