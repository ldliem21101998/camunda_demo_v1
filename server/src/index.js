import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dataRoutes from "./routes/data.js"
import authorizationRoutes from "./routes/authorization.js"
import dotenv from "dotenv"

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extend: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extend: true }));
app.use(cors());

app.use('/data', dataRoutes)
app.use('/authorization', authorizationRoutes)

// const CONNECTION_URL = "mongodb+srv://LiemLD:21101998@mernandsustainable.ychjwhk.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))