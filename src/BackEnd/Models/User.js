import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20
    },
    dob: {
        type: Date,
        required: true,
    }
});

userSchema.index({username: 1});

export default new mongoose.model('User', userSchema);