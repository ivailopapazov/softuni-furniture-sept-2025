import { Router } from "express";

const userController = Router();

userController.post('/register', async (req, res) => {
    res.end();
}); 

export default userController;
