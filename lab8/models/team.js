const db = require('../configs/config')

const schemaTeam = new db.Schema({
    teamName: {
        type: String,
        require: true,
        minlenght: 2,
        maxlenght: 250,
        trim: true
    },
    city: {
        type: String,
        require: true,
        minlenght: 2,
        maxlenght: 250,
        trim: true
    }
},
{versionKey: false});

module.exports = db.model('team', schemaTeam);