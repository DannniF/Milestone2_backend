const Food = require('../models/Food')


async function getAllFoods(req,res){
    try {
        const Foods = await Food.find()
        res.json(Foods)
    } catch (error) {
        console.log('error fetching all foods', error)
        res.status(500).json({message: 'error fetching all foods'})
    }
}

async function getFoodById(req,res){
    try {
        const { id } = req.params
        const food = await Food.findById(id)
        res.json(food)
    } catch (error) {
        console.log('error fetching  food', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

async function createFood(req, res) {

    try {
         if(!req.body.profilePicture) req.body.profilePicture = undefined
         const food = await new Food(req.body).save()
         res.status(201).json(food)
    } catch (error) {
        console.log('error creating foods', error)
        res.status(500).json({message: 'error creating food'})
    }

}
//update route
async function UpdateFood(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const food = await Food.findByIdAndUpdate(id, updateData, {new: true});
        res.json(food)
    } catch (error) {
        console.log('error updating food', error)
        res.status(500).json({message: 'error updating food'})
    }
}


async function findFoodsByName(req, res){
    try{
        const{searchString} = req.params
        const regex = new RegExp(searchString, 'i'); // 'i' for case-insensitive matching

        const matchingFoods = await Food.find({ name: { $regex: regex } });
        if(matchingFoods.length === 0){
            return res.status(404).json({ message: 'No matching foods found' });
        }
        res.json(matchingFoods)
    }catch(error){
        console.error('Error searching for foods by name', error);
        res.status(500).json({ message: 'Error searching for foods' });
    }
}


//delete route by id
async function DeleteFood(req,res){
    try {
        const { id } = req.params
        const food = await Food.findByIdAndDelete(id)
        res.json(food)
    } catch (error) {
        console.log('error fetching  food', error)
        res.status(500).json({message: 'error fetching food'})
    }
}



module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    findFoodsByName,
    UpdateFood,
    DeleteFood,
}