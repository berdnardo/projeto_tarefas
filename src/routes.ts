import { request, response, Router } from "express";

const route = Router();

route.get('/', (request, response) => {
  response.send('<h1>ok</h1>')
});

export {route}