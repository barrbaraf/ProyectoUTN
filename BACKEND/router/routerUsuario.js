import express from 'express';
import bcrypt from 'bcryptjs';
import Usuario from '../model/modelUsuario.js';

const router = express.Router();

// Ruta de login simple (sin JWT)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    return res.status(401).json({ error: 'Usuario no encontrado' });
  }

  const passwordMatch = await bcrypt.compare(password, usuario.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  // Si el login es correcto, no usamos JWT, solo devolvemos un mensaje
  res.json({ message: 'Login exitoso' });
});

// Ruta de registro (sin restricciones)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const usuarioExistente = await Usuario.findOne({ email });
  if (usuarioExistente) {
    return res.status(400).json({ error: 'El usuario ya existe' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const nuevoUsuario = new Usuario({ email, password: hashedPassword });

  try {
    await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Hubo un problema al crear el usuario' });
  }
});

export default router;
