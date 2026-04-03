// mongodb shema oluştur
import { Schema, model } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    country: {
        type: String,
        required: [true, "Country is required"],
    },
    profilePicture: {
        type: String,
        default: "default.jpg",
    },
    isSeller: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: String,
    },
    desciription: {
        type: String,
    },
}, { timestamps: true,
    versionKey: false,
    toJSON: { transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            return ret;
        } }
});
const User = model("User", userSchema);
export default User;
//# sourceMappingURL=user.model.js.map