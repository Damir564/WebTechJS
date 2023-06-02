const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dbAPI = require('./controllers/controller');
// const router = require('./router/router');



const HOST = '127.0.0.1';
const PORT = 5500;

const app = express();
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
app.use('/', dbAPI);

// app.use("/", router);

// app.use((req, res) => {
//     res.status(404).send('Page not found!');
// });

app.listen(PORT, HOST, () =>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
})
