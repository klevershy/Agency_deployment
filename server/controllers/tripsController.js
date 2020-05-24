const Trip = require('../models/Trips')


exports.destinationsPage = async (req, res) =>{

    const trips = await Trip.findAll()
        res.render('destinations', {
            page: 'Next Trips, do not miss them out !!',
            trips
        });

    // Trip.findAll()
    //     .then(trips =>  res.render('destinations', {
    //         page: 'Next Trips, do not miss them out !!',
    //         trips
    //     }) )   
    //     .catch(error => console.log(error)) 
}

exports.showTripInfo = async (req, res) =>{

        const trip = await Trip.findByPk(req.params.id)
            res.render('destiny',{
                trip
            })

    // Trip.findByPk(req.params.id)
    //     .then(trip => res.render('destiny', {
    //         trip
    //     }))
    //     .catch(error => console.log(error))
}