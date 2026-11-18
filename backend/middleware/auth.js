import jwt from "jsonwebtoken";

// auth() = any logged-in user; auth("admin") = one role; auth(["admin", "faculty"]) = either role
export const auth = (roles) => (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";

  if (!token) {
    return res.status(401).send("Not logged in");
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ["HS256"] });
  } catch {
    return res.status(401).send("Not logged in");
  }

  const allowed = roles ? (Array.isArray(roles) ? roles : [roles]) : null;
  if (allowed && !allowed.includes(req.user.role)) {
    return res.status(403).send("Not allowed");
  }

  next();
};
