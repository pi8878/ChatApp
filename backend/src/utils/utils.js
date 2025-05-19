import jwt from "jsonwebtoken";

export const generateToken= (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "7d"})

    res.cookie("jwt", token, {
        // expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,   //prevent XSS attacks cross-site scripting attacks
        secure: process.env.NODE_ENV !== "development", // only set the cookie over HTTPS in production
        sameSite: "strict"  // prevent CSRF attacks cross-site request forgery attacks
    });

    return token;
};