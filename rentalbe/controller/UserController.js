const express = require('express')
const router = express.Router();
const userService = require('../service/UserService')


/**
 * Metodo che mi ritorna tutti gli utenti registrati
 */
router.get('/allusers', async (req,res) => {
    return res.json( await userService.userService.getAllUsers().then(result => {return result}));
})



/**
 * Metodo che mi inserisce un nuovo utente
 */
router.post('/insertuser', async (req, res) => {
    return res.json( await userService.userService.insertUser(req.body).then(result => {return result}));
})



/**
 * Metodo per eliminare un utente
 */
router.delete('/deleteuser/:username', async (req,res) => {
    return res.json(await userService.userService.deleteUser(req.params.username).then(result => {return result}));
})



router.get('/bookingcar', async (req, res) => {
    return res.json(await userService.userService.bookingCar().then(result => {return result}));
})



module.exports = router;