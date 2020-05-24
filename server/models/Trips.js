const Sequelize = require('sequelize');

const db = require('../config/database');

// db.authenticate()
//     .then(() => console.log('db connected'))
//     .catch(error => console.log(error))


const Trip = db.define('trip', {
    title: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    depart_date: {
        type: Sequelize.DATE
    },
    return_date: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    available: {
        type: Sequelize.STRING
    }
});


module.exports = Trip;