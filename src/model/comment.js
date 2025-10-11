import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const CommentSchema = new Schema(
  {
    content: {
      type: Boolean,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

CommentSchema.plugin(CommentSchema);

export const Comment = mongoose.model("Comment", CommentSchema);
