const { default: mongoose } = require("mongoose");

const aiRequestSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    prompt: { type: String, required: true }, // User's input text for image generation
    image: { type: String }, // URL of the generated image
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const AIRequest = mongoose.model("AIRequest", aiRequestSchema);
