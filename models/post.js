import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      name: String,
      required: true,
    },
    desc: {
      name: String,
      required: true,
    },
    img: {
      name: String,
      required: true,
    },
    content: {
      name: String,
      required: true,
    },
    username: {
      name: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
