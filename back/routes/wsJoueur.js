const { body } = require('express-validator');
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
    app.post('/joueur',
        [
            body('libelle')
                .trim()
                .isLength({ min: 5 }),
            body('club').trim().isLength({min : 2}),
            body('pac').isNumeric(),
            body('sho').isNumeric(),
            body('pas').isNumeric(),
            body('dri').isNumeric(),
            body('def').isNumeric(),
            body('phy').isNumeric(),
    ], (req, res) => {
        console.log(req.body)
        req.body.score = calculeScore(req.body)
        joueursListe.push(req.body)
        res.send(req.body).status(200)
    })

    app.get('/joueurs', (req, res) => {
            res.send(joueursListe.sort((j1, j2) =>  j2.score - j1.score)).status(200);
        })
};

function calculeScore({pac, sho, pas, dri, def, phy}){
    console.log(pac + sho + pas + dri + def + phy)
    return (pac + sho + pas + dri + def + phy) / 6
}