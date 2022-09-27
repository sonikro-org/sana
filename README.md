# NodeJS-Troubleshoot-API


# Goal

> This repository was designed to be used in technical interviews, and it's purpose is to assess the ability of the candidate to troubleshoot real-world problems from development to deployment.
> It is a complement to regular coding challenges

## Running locally

You can either use **npm start** to run with ts-node or **npm run dev** to use nodemon and have hot-reloading

## Building Docker Image

This repository builds and node:16-alpine image with the transpiled code. To build, just run:

```bash
docker build -t nodejs-troubleshoot-api .
```

## Running your docker image

```bash
docker run -it -p 8080:8080 nodejs-troubleshoot-api
```

## Accessing your API

The API is deployed to Heroku and can be accessed:

- [https://nodejs-troubleshoot-api.herokuapp.com/hello](https://nodejs-troubleshoot-api.herokuapp.com/hello)
- [https://nodejs-troubleshoot-api.herokuapp.com/hello?name=Joselito](https://nodejs-troubleshoot-api.herokuapp.com/hello?name=Joselito)

