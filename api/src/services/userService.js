import User from "../models/User.js"

export default {
    register(email, password) {
        return User.create({ email, password })
    }
}
