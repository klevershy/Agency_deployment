const Trip = require('../models/Trips')
const Review = require('../models/Reviews')

exports.homePage = async (req, res) =>{

    const trips = await Trip.findAll({
        limit: 3
    })

    const reviews = await Review.findAll({
        limit: 3
    })
   
      res.render('index', {

        page: 'Our Next Trips !!',
        homeClass: 'home',
        trips: trips,
        reviews : reviews 
    })   
  
} 