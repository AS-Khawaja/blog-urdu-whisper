import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    full_text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Prevent model overwrite in dev with hot reload
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
