import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Faculty from "../models/faculty.js";
import Student from "../models/student.js";
import Admin from "../models/admin.js";

// bcrypt hashes start with $2a$, $2b$ or $2y$. Anything else is a plain-text
// password and needs to be replaced. This makes the script safe to re-run.
const isHashed = (value) => typeof value === "string" && /^\$2[aby]\$/.test(value);

async function hashCollection(name, model) {
  const docs = await model.find().select("+password"); // password has select:false, so ask for it explicitly
  let hashed = 0;

  for (const doc of docs) {
    if (!doc.password || isHashed(doc.password)) continue;

    doc.password = await bcrypt.hash(doc.password, 10);
    await doc.save();
    hashed++;
  }

  console.log(`${name}: ${hashed} hashed, ${docs.length - hashed} already hashed/skipped`);
}

try {
  await mongoose.connect(process.env.MONGODB_URI);

  await hashCollection("faculties", Faculty);
  await hashCollection("students", Student);
  await hashCollection("admins", Admin);

  console.log("Password migration complete");
} catch (error) {
  console.error("Password migration failed:", error);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
