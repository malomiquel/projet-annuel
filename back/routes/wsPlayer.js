const { body, validationResult } = require('express-validator');

const joueursListe = [{
    libelle: 'Clem',
    pac: 10,
    sho: 12,
    pas: 14,
    dri: 16,
    def: 18,
    phy: 30,
    score: 10,
    club: 'ESGI'
},
    {
        libelle: 'Teo',
        pac: 10,
        sho: 12,
        pas: 14,
        dri: 16,
        def: 18,
        phy: 50,
        score: 20,
        club: 'ESGI'
    },
    {
        libelle: 'Malo',
        pac: 10,
        sho: 12,
        pas: 14,
        dri: 16,
        def: 18,
        phy: 30,
        score: 30,
        club: 'ESGI'
    }
];

module.exports = function (app) {

    /**
 * Valeur de retour
 * @typedef {object} ScoredPlayer
 * @property {string} label.required - Player name
 * @property {string} club.required - Player's club name
 * @property {number} pac.required - Pace
 * @property {number} sho.required - Shooting
 * @property {number} pas.required - Passing
 * @property {number} dri.required - Dribbling
 * @property {number} def.required - Defending
 * @property {number} phy.required - Physicality
 * @property {number} score.required - Global score
 */

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
     * @return {ScoredPlayer} 200 - Succes - application/json
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
                joueursListe.push(req.body)
                res.send(req.body).status(200)
    })

    /**
     * GET /players
     * @summary Player list, sorted by highest score
     * @return {array<ScoredPlayer>} 200 - Succes - application/json
     */
    app.get('/players', (req, res) => {
            res.send(joueursListe.sort((j1, j2) =>  j2.score - j1.score)).status(200);
        })
};

function calculeScore({pac, sho, pas, dri, def, phy}){
    console.log(pac + sho + pas + dri + def + phy)
    return (pac + sho + pas + dri + def + phy) / 6
}