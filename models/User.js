const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        location: {type: String, required: false},
        isAdmin: {type: Boolean, default: false},
        isAgent: {type: Boolean, default: false},
        skills: {type: Array, default: false},
        profile: {
            type: String, 
            required: true, 
            default: "https://cdn-icons-png.flaticon.com/512/5220/5220478.png"
        },
    }, {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema)