const router = require('express').Router()


const {
    getAllReviews,
    getRecentReview,
    createReview,
    getReviewById,
    UpdateReview,
    DeleteReview
} = require('../controllers/Review')

//get All Reviews
router.get('/all', getAllReviews)
//get most Recent Review
router.get('/:id', getRecentReview)
//Create Review
router.post('/', createReview)
//Delete Food
router.delete('/:id', DeleteReview)

//Update Food
router.put('/:id', UpdateReview)
module.exports = router