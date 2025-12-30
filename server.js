import express from "express"
import reportsRouter from "./routes/reportsR.js"
import { config } from "dotenv"
config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use("/reports", reportsRouter)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})

