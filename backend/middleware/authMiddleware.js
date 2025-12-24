import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token" });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ attach ONLY userId
    req.user = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Not authorized" });
  }
};

export default protect;
