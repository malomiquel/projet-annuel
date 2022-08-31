const { body, validationResult } = require('express-validator');
const Player = require('../models/player.js');

module.exports = function (app) {

    /**
     * POST /player
     * @summary Create a player
     * @property {string} label.required - Player name
     * @property {string} club.required - Player's club name
     * @property {number} pac.required - Pace
     * @property {number} sho.required - Shooting
     * @property {number} pas.required - Passing
     * @property {number} dri.required - Dribbling
     * @property {number} def.required - Defending
     * @property {number} phy.required - Physicality
     * @return {Player} 200 - Succes - application/json
     */
    app.post('/player',
            body('label').trim().isLength({ min: 5 }),
            body('club').trim().isLength({min : 2}),
            body('pac').isNumeric(),
            body('sho').isNumeric(),
            body('pas').isNumeric(),
            body('dri').isNumeric(),
            body('def').isNumeric(),
            body('phy').isNumeric(), 
            (req, res) => {

                console.log(req.body)

                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                        
                req.body.score = calculeScore(req.body)
                const player = new Player(req.body);
                player
                    .save()
                    .then(result => {
                        res.send(player).status(200)
                    })
                    .catch(err => {
                        console.log(err);
                        res.send(err).status(400)
                    });
               
    })

    /**
     * GET /players
     * @summary Player list, sorted by highest score
     * @return {array<Player>} 200 - Succes - application/json
     */
    app.get('/players', (req, res) => {

            Player.find().then(r => {
                res.send(r.sort((j1, j2) => j2.score - j1.score)).status(200);
            }).catch(e => res.send(e).status(400))
        })
};

function calculeScore({pac, sho, pas, dri, def, phy}){
    console.log(pac + sho + pas + dri + def + phy)
    return (pac + sho + pas + dri + def + phy) / 6
}