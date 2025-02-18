import mongoose from 'mongoose';
import dotenv from 'dotenv';


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar con MongoDB Atlas:', error);
    process.exit(1); // Salir del proceso si no se conecta
  }
};

export default connectDB;
