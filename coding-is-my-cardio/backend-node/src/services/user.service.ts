import UserModel from '../model/user.schema';
import { UserInterface } from '../types/user.type';


/**
 * Register user
 * @param user UserInterface
 * @returns Promise<UserInterface>
 * @description Create a new user
 */
const registerUser = async (user: UserInterface) => {
    const newUser = await UserModel.create(user);
    return newUser;
}

/**
 * Find user
 * @param email string
 * @returns Promise<UserInterface>
 * @description Find a user by email
 */
const getUserByEmal = async (email: string) => {
    const user = await UserModel.findOne({ email });
    return user;
}

export {
    registerUser,
    getUserByEmal 
}