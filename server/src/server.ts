import express from "express";

const app = express();

app.get('/ads', (request, response) => {
    return response.json({ message: 'acessou!' });
});

app.listen(3333);