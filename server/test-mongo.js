const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://michaelfilippo:GYLxX0xDrw4ON7DM@ripassino.oupediz.mongodb.net/?retryWrites=true&w=majority&appName=sample_mflix";

async function testConnection() {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });

  try {
    await client.connect();
    console.log("✅ Connected successfully");
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  } finally {
    await client.close();
  }
}

testConnection();
