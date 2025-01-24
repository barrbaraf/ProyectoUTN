import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Barrbara021:iwzAQsLA42KLBqT4@cluster0.pnw24.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar con MongoDB Atlas:', error);
    process.exit(1); // Salir del proceso si no se conecta
  }
};

export default connectDB;
