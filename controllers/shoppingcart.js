const Cart = require('../models/shoppingcart')


async function getAllCart(req,res){
    try {
        const Carts = await Cart.find()
        res.json(Carts)
    } catch (error) {
        console.log('error fetching all foods', error)
        res.status(500).json({message: 'error fetching all foods'})
    }
}

async function getCartById(req,res){
    try {
        const { id } = req.params
        const Cart = await Cart.findById(id)
        res.json(Cart)
    } catch (error) {
        console.log('error fetching  food', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

async function createCart(req, res) {

    try {
         if(!req.body.profilePicture) req.body.profilePicture = undefined
         const Cart = await new Food(req.body).save()
         res.status(201).json(Cart)
    } catch (error) {
        console.log('error creating foods', error)
        res.status(500).json({message: 'error creating food'})
    }

}
//update route
async function UpdateCart(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;
        const Cart = await Cart.findByIdAndUpdate(id, updates, {new: true});
        res.json(Cart)
    } catch (error) {
        console.log('error fetching  food', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

async function findCartByName(req, res){
    try{
        const{searchString} = req.params
        const regex = new RegExp(searchString, 'i'); // 'i' for case-insensitive matching

        const matchingCarts = await Cart.find({ name: { $regex: regex } });
        if(matchingCarts.length === 0){
            return res.status(404).json({ message: 'No matching foods found' });
        }
        res.json(matchingCarts)
    }catch(error){
        console.error('Error searching for foods by name', error);
        res.status(500).json({ message: 'Error searching for foods' });
    }
}


//delete route by id
async function DeleteCart(req,res){
    try {
        const { id } = req.params
        const Cart = await Cart.findByIdAndDelete(id)
        res.json(Cart)
    } catch (error) {
        console.log('error fetching  food', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

module.exports = {
    getAllCart,
    getCartById,
    createCart,
    findCartByName,
    UpdateCart,
    DeleteCart,
}