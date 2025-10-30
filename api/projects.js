const mongoose = require("mongoose");

let cachedConnection = global.__mongoose;
if (!cachedConnection) {
  cachedConnection = { conn: null, promise: null };
  global.__mongoose = cachedConnection;
}

async function connectToDatabase() {
  if (cachedConnection.conn) return cachedConnection.conn;
  if (!cachedConnection.promise) {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) throw new Error("MONGO_URL env var is required");
    cachedConnection.promise = mongoose
      .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((m) => m);
  }
  cachedConnection.conn = await cachedConnection.promise;
  return cachedConnection.conn;
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectToDatabase();

    const projectSchema = new mongoose.Schema(
      {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        features: { type: [String], required: true },
        tech: { type: [String], required: true },
        github: { type: String },
        live: { type: String }
      },
      { collection: "Projects" }
    );

    const ProjectModel = mongoose.models.Projects || mongoose.model("Projects", projectSchema);
    const projects = await ProjectModel.find();
    return res.status(200).json(projects);
  } catch (err) {
    console.error("/api/projects error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};


