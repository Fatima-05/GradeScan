import { verifyAccessToken } from "../utils/tokens.js";

// Authentication: "who is calling?" -> 401 when the answer is unknown or invalid.
export const authenticate = (req, res, next) => {
  const [scheme, token] = (req.headers.authorization || "").split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ error: { message: "Missing or malformed Authorization header" } });
  }

  try {
    const payload = verifyAccessToken(token); // verify(), never decode(), when deciding trust
    req.user = {
      id: payload.id,
      email: payload.email,
      role: payload.role,
      registrationNumber: payload.registrationNumber,
    };
    next();
  } catch (error) {
    const expired = error.name === "TokenExpiredError";
    res.status(401).json({
      error: { message: expired ? "Access token expired" : "Invalid access token" },
    });
  }
};

// Authorization: "may this caller do this?" -> 403 when the answer is no.
export const authorize = (...roles) => (req, res, next) =>
  roles.includes(req.user.role)
    ? next()
    : res.status(403).json({ error: { message: "Insufficient permissions" } });
