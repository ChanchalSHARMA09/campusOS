import app from "./src/app.js";
import dotenv from "dotenv";
import connectDb from "./src/config/database.js";
dotenv.config();

const PORT=process.env.PORT;

await connectDb();

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});