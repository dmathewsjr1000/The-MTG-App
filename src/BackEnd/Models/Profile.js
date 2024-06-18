import mongoose from "mongoose";

export const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
  },
    bioText: {
      type: String,
    },
    followers: {
        type: Number,
        default: 0
    },
    following: {
        type: Number,
        default: 0
    },
  },
  { timestamps: true },
);

export default mongoose.model("Profile", profileSchema);