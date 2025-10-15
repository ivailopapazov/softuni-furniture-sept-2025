import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const result = await userService.register(email, password);

    // TODO: Return data for login
    res.status(201).end();
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userService.login(email, password);

        res.status(201).json(result)
    } catch (err) {
        // Extract error message
        res.status(401).json({ message: err.message });
    }
});

export default userController;
