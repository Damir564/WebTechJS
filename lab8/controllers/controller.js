const express = require('express');
const controller = express.Router();
const {insertTeam, findTeamById} = require('../services/service');
const jsonParser = express.json();

controller.post('/teams', jsonParser, insertTeam);;
controller.get('/teams/:id', jsonParser, findTeamById);

controller.use((req, res) => {
    res.status(404).send('Page not found!');
});

module.exports = controller;
