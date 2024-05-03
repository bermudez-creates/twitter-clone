import mongoose from 'mongoose';

const connectMongoDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connection successful: ${connect.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to database: ${err.message}`);
    process.exit(1);
  }
};

export default connectMongoDb;
