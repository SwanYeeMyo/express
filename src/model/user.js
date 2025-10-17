import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    emali: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    profile_photo: {
      type: String,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

//pre middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  //using hash change the plain password to hash
  this.password = bcrypt.hash(this.password, 10);
  next();
});

//custom methood
userSchema.methods.isPasswordisMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};

//generate Token
userSchema.methods.generateAccessToken = async function () {
  jwt.sign(
    {
      _id: this_id,
      email: this.email,
      username: this.username,
    },
    process.env.JWT_SECRET
  ),
    { expiresIn: 60 * 60 };
};

userSchema.plugin(paginate);

export const User = mongoose.model("User", userSchema);
