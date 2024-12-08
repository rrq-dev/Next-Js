import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("67449dd7000615d4141a"); // Your project ID

const databases = new Databases(client);

export default databases;
