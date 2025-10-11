import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

PostSchema.plugin(paginate);

export const Post = mongoose.model("Post", PostSchema);
