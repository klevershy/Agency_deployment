const express = require('express');
const router = express.Router();

// const Trip = require('../models/Trips')
// const Review = require('../models/Reviews')

//  controllers
const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const tripsController = require('../controllers/tripsController')
const reviewsController = require('../controllers/reviewsController')

module.exports = function(){
   
    router.get('/', homeController.homePage );

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/destinations', tripsController.destinationsPage );

    router.get('/trip/:id', tripsController.showTripInfo);

    router.get('/reviews', reviewsController.showReviews)

    // when form is filled !!
    router.post('/reviews', reviewsController.addReview)



return router
}