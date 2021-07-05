const express = require('express')
const router = express.Router();
const rentalCarService = require('../service/RentalCarService')


/**
 * Inserimento in db del nuovo veicolo
 */
router.post('/insertcar', async (req,res) => {
    return res.json( await rentalCarService.rentalCarService.insertCar(req.body).then( result => {return result}));
})


/**
 * Metodo che mi ritorna tutte le auto presenti nel db
 */
router.get('/getcars', async (req,res) => {
    return res.json(await rentalCarService.rentalCarService.getAllCars())
} )



/**
 * Metodo che mi ritorna il dettaglio di un veicolo a partire dalla targa
 * @param: targa
 */
router.get('/detailcar/:targa', async(req,res) => {
    return res.json(await rentalCarService.rentalCarService.getDetailCarByTarga(req.params.targa))
})



/**
 * Metodo che mi ritorna i marchi di auto disponibili
 */
router.get('/marchi', async (req,res) => {
    return res.json(await rentalCarService.rentalCarService.getMarchi());
})



/**
 * Metodo che mi ritorna i modelli a partire dal marhio
 */
router.get('/modelli/:marchio', async (req,res) => {
    return res.json(await rentalCarService.rentalCarService.getModelliByMarchio(req.params.marchio))
})



/**
 * Metodo che va ad eliminare il veicolo tramite la targa
 */
router.delete('/deletecar/:targa', async (req,res) => {
    return res.json(await  rentalCarService.rentalCarService.deleteCar(req.params.targa));
})



router.put('/updatecar', async (req,res) => {
    return res.json(await  rentalCarService.rentalCarService.updateCar(req.body));
})


module.exports = router