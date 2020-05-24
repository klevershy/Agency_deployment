const Sequelize = require('sequelize');

const db = require('../config/database');


const Reviews = db.define('reviews', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
});

module.exports = Reviews