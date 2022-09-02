const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
* @typedef {object} Player
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
const postSchema = new Schema(
    {
        label: {
            type: String,
            required: true
        },
        club: {
            type: String,
            required: true
        },
        pac: {
            type: Number,
            required: true
        },
        sho: {
            type: Number,
            required: true
        },
        pas: {
            type: Number,
            required: true
        },
        dri: {
            type: Number,
            required: true
        },
        def: {
            type: Number,
            required: true
        },
        phy: {
            type: Number,
            required: true
        },
        score: {
            type: Number,
            required: false
        },
    },
    { timestamps: false }
);

module.exports = mongoose.model('Player', postSchema);