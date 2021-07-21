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
 * Metodo per l'aggiornamento utente
 */
router.put('/updateuser', async (req,res) => {
    return res.json(await userService.userService.updateUser(req.body))
})



/**
 * Metodo che mi va a validare l'operazione di booking relativa ad un dato utente
 * Tale operazione piò essere eseguita solo ed esclusivamente da utenti con grado superiore
 */
router.get('/validBooking/:idBooking', async ( req,res) => {
    return res.json(await userService.userService.validationBooking(res.params.idBooking))
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



/**
 * Metodo che va a realizzare la prenotazione del veicolo
 */
router.post('/bookingcar', async (req, res) => {
    return res.json(await userService.userService.bookingCar(req.body).then(result => {return result}));
})



/**
 * Metodo che va a rimuovere la prenotazione a partire dal codice prenotazione
 */
router.delete('/deletebooking/:codicePrenotazione', async (req,res) => {
    return res.json(await userService.userService.deleteBooking(req.params.codicePrenotazione))
})



/**
 * Metodo che mi ritorna tutte le prenotazioni
 */
router.get('/getallbooking', async (req,res) => {
    return res.json(await  userService.userService.getAllBooking())
})



module.exports = router;