import {Request, Response} from "express"

export const helloMiddleware = (request: Request, response: Response) => {
    if(!request.query.name){
        return response.send({
            message: `Hello World. I'm ${request.query.param}`
        })
    } else {
        return response.send({
            message: `Hello Stranger`
        })
    }
}