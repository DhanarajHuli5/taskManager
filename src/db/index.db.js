import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connected')
    } catch (error) {
        console.log("DB connection failed",error)
        
    }
}

export default connectDB