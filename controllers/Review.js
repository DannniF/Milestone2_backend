const Review = require('../models/Review')
//get all reviews for our review page 
async function getAllReviews(req,res){
    try {
        const Reviews = await Review.find()
        console.log(Reviews)
        res.json(Reviews)
    } catch (error) {
        console.log('error fetching all Reviews', error)
        res.status(500).json({message: 'error fetching all Reviews'})
    }
}


//get recent review for future item review
async function getRecentReview(req,res){
    try {
        const Reviews = await Review.findOne().sort({createdAt: -1})
        res.json(Reviews)
    } catch (error) {
        console.log('error fetching most recent review', error)
        res.status(500).json({message: 'error fetching most recent review'})
    }
}

//random food generator 
async function randomReview(req,res){
    try {
        const randomIndex = Math.floor(Math.random() * Review.length);
        const randomReview = Review[randomIndex];
        console.log(`Random Index: ${randomIndex}, Review Length: ${Review.length}`);
        res.json(randomReview);
    } catch (error) {
        console.log('error generating random review', error);
        res.status(500).json({message: 'error generating random review'})
    }
}
//get Review by Id 
async function getReviewById(req,res){
    try {
        const { id } = req.params
        const Reviews = await Review.findById(id)
        res.json(Reviews)
    } catch (error) {
        console.log('error fetching  Review', error)
        res.status(500).json({message: 'error fetching review'})
    }
}
// create a review for our review page , giving the user the ability to leave a comment and rating 
async function createReview(req, res) {

    try {
         const Reviews = await new Review(req.body).save()
         res.status(201).json(Reviews)
    } catch (error) {
        console.log('error creating Reviews', error)
        res.status(500).json({message: 'error creating Reviews'})
    }

}

//update review for login user reviews , that can be edited by user 
async function UpdateReview(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;
        const review = await Food.findByIdAndUpdate(id, updates, {new: true});
        res.json(review)
    } catch (error) {
        console.log('error fetching  review', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

//delete route by id, for future feature allowing logged in users to delete created reviews 
async function DeleteReview(req,res){
    try {
        const { id } = req.params
        const Reviews = await Review.findByIdAndDelete(id)
        res.json(Reviews)
    } catch (error) {
        console.log('error fetching  food', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

module.exports = {
    getAllReviews,
    getRecentReview,
    createReview,
    getReviewById,
    UpdateReview,
    DeleteReview,
    randomReview,

}