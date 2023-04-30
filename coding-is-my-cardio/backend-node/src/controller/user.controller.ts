import { Request, Response } from "express";
import { registerUser, getUserByEmal } from "../services/user.service";

const getUser = async (req:Request, res:Response) => {
    const { params } = req;
    const user = await getUserByEmal(params.email);
    res.send({
        error: false,
        message: "User found",
        data: user
    });
}

const insertUser = async (req:Request, res:Response) => {
    const { body } = req;
    const user = await registerUser(body);
    res.json({
        error: false,
        message: "User created",
        data: user
    });
}

export {insertUser, getUser}