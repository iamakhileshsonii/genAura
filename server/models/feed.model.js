const { default: mongoose } = require("mongoose");

const feedSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  updatedAt: { type: Date, default: Date.now },
});

export const Feed = mongoose.model("Feed", feedSchema);
