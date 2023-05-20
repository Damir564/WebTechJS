const express = require('express');
const router = require('./router/router')

const HOST = '127.0.0.1';
const PORT = 5500;

const app = express();
app.use(express.static('public'));

app.use("/", router);

app.use((req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(PORT, HOST, () =>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
})
