import bcrypt from 'bcrypt';

import User from "../models/User.js"

export default {
    register(email, password) {
        return User.create({ email, password })
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password!');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('Invalid email or password!');
        }

        // Generate token
        return user;
    }
}
