// use prisma sdk/orm
import prisma from "../db";

import { createJWT, hashPassword, comparePasswords } from "../modules/auth";

// db queries are always async
export const createNewUser = async (req, res) => {
    const hash = await hashPassword(req.body.password);

    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: hash,
        },
    });

    const token = createJWT(user);
    res.json({ token }); // same as typing: res.json({token: token})
};

export const signin = async (req, res) => {
    // find the user by username who is trying to sign in
    // don't need to pass in password because that is a plaintext password, but the db stored a hash password
    // due to indexing this is more complex
    const user = await prisma.user.findUnique({
        where: { id: req.body.username },
    });

    const isValid = await comparePasswords(req.body.password, user.password);
    
    if (!isValid) {
        res.status(401);
        res.send("Invalid username or password");
        return;
    }

    const token = createJWT(user);
    res.json({ token });
};