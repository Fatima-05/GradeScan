import jwt from "jsonwebtoken";

const ACCESS_TTL = process.env.JWT_EXPIRES_IN || "1d";

// One place for signing and verifying access tokens, like utils/tokens.js in the reference.
export const signAccessToken = (user, role, extra = {}) =>
  jwt.sign(
    { id: user._id, email: user.email, role, ...extra },
    process.env.JWT_SECRET,
    { algorithm: "HS256", expiresIn: ACCESS_TTL }
  );

export const verifyAccessToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET, { algorithms: ["HS256"] });
