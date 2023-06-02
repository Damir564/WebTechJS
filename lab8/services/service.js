const Team = require("../models/team");
const db = require("../configs/config");

async function insertTeam(req, res) {
    console.log(req.body);
    const team = new Team(req.body);
    const result = await team.save();
    if (!("teamName" in req.body) || !("city" in req.body))
    {
        res.status('404').send(`teamName or city not found in request body`);
        return;
    }
    if (req.body.teamName == "" || req.body.city == "")
    {
        res.status('404').send("teamName or city is empty in request body");
        return;
    }
    res.end(team.toString());
}

async function findTeamById(req, res) {
    const id = req.params.id;
    try {
        const currentTeam = await Team.findById(id).exec();
        const result = currentTeam;
        console.log(result);
        res.end(result.toString());
    } catch (err) {
        res.end('team ID is wrong!');
    }

}

module.exports = { insertTeam, findTeamById };
