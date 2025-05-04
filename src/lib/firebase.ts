import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://furia-chat-569cc-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
