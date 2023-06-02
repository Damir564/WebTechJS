const db = require('mongoose');

db.connect('mongodb://127.0.0.1:27017/lab8', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db;