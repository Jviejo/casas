import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb://localhost:27017';
const MONGODB_DB = 'casa';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(MONGODB_URI);
  cachedClient = client;
  return client;
} 