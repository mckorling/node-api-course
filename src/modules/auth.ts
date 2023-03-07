import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

// return true or false, for sign in
export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash);
};

// create initial hash for password
export const hashPassword = (password) => {
    // adding a salt makes it exponentially harder to guess the hash, here the salt is 5
    return bcrypt.hash(password, 5);
};

export const createJWT = (user) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
    );
    return token;  // token: string
};

// middleware
export const protect = (req, res, next) => {
    // bearer = design pattern in authentication in http
    // this person is sending a token (can be many types of token)
    // header: another place in a request to add another option
    // example: cache control, issuer
    // like metadata for the request
    const bearer = req.headers.authorization;
    
    if (!bearer) { // no bearer token sent up
        res.status(401);
        res.send("Not authorized");
        return;
    }

    const [, token] = bearer.split(" "); // expecting a token that looks like "Bearer tokentokentoken..."
    // we will only use the token, do not care about "Bearer" text literal
    if (!token) {
        console.log("here");
        res.status(401);
        res.send("Not authorized");
        return;
    }

    // is it a real JWT defined by the secret? last check needed
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        console.log(payload);
        next();
        return;
    } catch (e) {
        // need this to not break the server
        console.error(e);
        res.status(401);
        res.send("Not authorized");
        return;
    }
};