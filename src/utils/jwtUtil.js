import { sign } from "jsonwebtoken";
import config from "../config/authConfig";

export const createToken = (identity) => {
  const { secretKey, accessExpire, refreshExpire } = config;

  const accessToken = sign({ identity }, secretKey, {
    expiresIn: accessExpire,
  });

  const refreshToken = sign({ identity }, secretKey, {
    expiresIn: refreshExpire,
  });

  return {
    accessToken,
    refreshToken,
  };
};
