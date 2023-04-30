import {Schema, model} from 'mongoose';

const User = {
    id: {
        type: Number,
        required: true,
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: false
    },
    ip_address: {
        type: String,
        required: false
    }
};
const Options = {
    timestamps: true
};
const UserSchema = new Schema(User, Options);
const UserModel = model('users', UserSchema);

export default UserModel;