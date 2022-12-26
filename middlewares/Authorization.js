import jwt from "jsonwebtoken";

const Authorization = (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (token === null || token === undefined)
      return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      function (error, decoded) {
        if (error) return undefined;

        return decoded;
      }
    );

    if (decoded === undefined)
      return res.status(401).json({ message: "Unauthorized" });

    req.email = decoded.email;
    req._id = decoded._id;

    return next();
  } catch (error) {
    console.log("Error in Authorization middleware");
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default Authorization;
