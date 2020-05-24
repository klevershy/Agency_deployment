const Review = require('../models/Reviews')

exports.showReviews = async (req, res) =>{

    const reviews = await Review.findAll()
        res.render('reviews', {
            page: 'What are they saying',
            reviews: reviews
        })

    // Review.findAll()
    // .then(reviews => res.render('reviews', {
    //     page: 'What are they saying',
    //     reviews: reviews
    // }))
   
}


exports.addReview =  async (req, res) =>{
    // check all fields are filled 

    

    let {name, email, message} = req.body;

    let errors = [];

    if(!name){
        errors.push({ 'alertMessage': 'Enter your Name' })
    }
    if(!email){
        errors.push({ 'alertMessage': 'Enter your email' })
    }
    if(!message){
        errors.push({ 'alertMessage': 'Enter your Message' })
    }

    // revise for errors
    if(errors.length > 0){
        // show the view with errors

        const reviews = await Review.findAll()
        res.render('/reviews',{
            errors,
            name,
            email,
            message,
            page: 'reviews',
            reviews
        });
    } else{
        // store in DB

        await Review.create({ name, email, message })
            res.render('/reviews');

        // Review.create({
        //     name,
        //     email,
        //     message
        // })
        // .then(review => res.redirect('/reviews'))
        // .catch(error => console.log(error));            
    }
}