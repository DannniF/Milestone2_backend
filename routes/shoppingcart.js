const router = require('express').Router()
//check what .Router() does for our routes (controller)
const {
    getAllCarts,
    getCartById,
    createCart,
    findCartsByName,
    UpdateCart,
    DeleteCart,

} = require('../controllers/shoppingcart')

//get all Foods
router.get('/all', getAllCarts)

//get foods by Id
router.get('/:id', getCartById)

//create new Food
router.post('/', createCart)

//search foods
router.get('/searchcart/:searchString', findCartsByName)
router.get('/groceryItem/:searchString', findCartsByName)

//Delete Food
router.delete('/:id', DeleteCart)

//Update Food
router.put('/:id', UpdateCart)

//get all reviews

//get reviews by id

//create new review and rating

//update review and rating

//delete review and rating


module.exports = router