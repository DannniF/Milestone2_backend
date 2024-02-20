const router = require('express').Router()
//check what .Router() does for our routes (controller)
const {
    signUp,
} = require('../controllers/User')

//get all Foods
router.post('/signup', signUp)

module.exports = router