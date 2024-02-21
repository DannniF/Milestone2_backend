const Review = require('../models/Review')

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

async function getRecentReview(req,res){
    try {
        const Reviews = await Review.findOne().sort({createdAt: -1})
        res.json(Reviews)
    } catch (error) {
        console.log('error fetching most recent review', error)
        res.status(500).json({message: 'error fetching most recent review'})
    }
}

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

async function createReview(req, res) {

    try {
         const Reviews = await new Review(req.body).save()
         res.status(201).json(Reviews)
    } catch (error) {
        console.log('error creating Reviews', error)
        res.status(500).json({message: 'error creating Reviews'})
    }

}

//update route
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

//delete route by id
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

}