import express from "express"
import { helloMiddleware } from "./middlewares/hello"

const server = express()

const port = process.env.PORT || 8080

server.get("/hello", helloMiddleware)


server.listen(port, () => {
    console.log(`Application listening at port ${port}`)    
})
