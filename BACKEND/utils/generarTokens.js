import jwt from "jsonwebtoken";

const JWT_ACCESS = process.env.JWT_ACCESS ||"cualquierclave";
const JWT_REFRESH = process.env.JWT_REFRESH || "cualquierclave";
const JWT_ACCESS_EXPIRES = process.env.JWT_ACCESS_EXPIRES ||900
const JWT_REFRESH_EXPIRES = process.env.JWT_REFRESH_EXPIRES || 2592000;

export const generarAccessToken = (payload) => {
  const expiraen = JWT_ACCESS_EXPIRES || 60*15; // 900 segundos = 15 minutos
  return jwt.sign(payload, JWT_ACCESS, { expiresIn: expiraen });
};

export const generarRefreshToken = (payload) => {
  const expiraen = JWT_REFRESH_EXPIRES || 60*60*24*30; // 604800 segundos = 7 días
  return jwt.sign(payload, JWT_REFRESH, { expiresIn: expiraen });
};
