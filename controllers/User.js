const bcrpyt = require('bcrypt')
const User = require('../models/User')

async function signUp (req, res) {

    try {
        const { email, password } = req.body
        const encryptedPassword = await bcrpyt.hash(password, 10)
        const user = await new User({
            email,
            password: encryptedPassword
        })
        user.save()
        res.status(200).json({message: 'sign up error'})
        // user.save(function (err, data) {
        //     // if (err) {
        //     //     console.log('sign up error', error)
        //     //     res.status(500).json({message: 'sign up error'})
        //     // } else {
        //     //     res.status(200)
        //     // }
        // })
    } catch (error) {
        console.log('sign up error', error)
        res.status(500).json({message: 'sign up error'})
    }

}

module.exports = {
    signUp,
}