const express = require('express');

const HOST = '127.0.0.1';
const PORT = 5500;

const app = express();

app.listen(PORT, HOST, () =>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
})