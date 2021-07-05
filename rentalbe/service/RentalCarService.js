const Car = require('../entity/Car')
const CarResponse = require('../response/CarResponse')
const EsitoResponse = require('../response/EsitoResponse')

/**
 * Metodo che mi ritorna l'elenco di tutte le auto disponibili
 * @returns {Promise<[CarResponse]>}
 */
async function getAllCars(){
    let carList = [];
    let carListResponse = []


    carList = await Car.find().then( result => {return result})


    carList.forEach(car => {
        let carResponse = new CarResponse(car.targa, car.modello, car.marca, car.colore, car.cilindrata, car.porte, car.annoProduzione, car.dataImmatricolazione);
        carListResponse.push(carResponse)
    })

    return carListResponse;
}



/**
 * Metodo per inserire un nuovo veicolo
 * @returns {Promise<EsitoResponse>}
 */
async function insertCar(veicolo){

    const elem = new Car({
        targa: veicolo.targa,
        modello: veicolo.modello,
        marca: veicolo.marca,
        colore: veicolo.colore,
        cilindrata: veicolo.cilindrata,
        porte: veicolo.porte,
        annoProduzione: veicolo.annoProduzione,
        dataImmatricolazione: veicolo.dataImmatricolazione
    })

    return await elem.save().then(() => {return new EsitoResponse(true, "Salvataggio avvenuto")})
                            .catch(err => {console.log(err); return new EsitoResponse(false, "Salvataggio fallito")})
}


/**
 * Metodo che mi ritorna i dettagli di una data auto a partire dalla sua targa
 * @param targa
 * @returns {Promise<CarResponse>}
 */
async function getDetailCarByTarga(targa){

    let result = {}
    let carResponse = {}

    result = await Car.findOne( {targa: targa}).then(result => {return result})
    carResponse = new CarResponse(result.targa, result.module, result.marca, result.colore, result.cilindrata, result.porte, result.annoProduzione, result.dataImmatricolazione)

    return carResponse;
}


/**
 * Metodo che mi ritorna l'elenco dei marchi disponibili
 * @returns {Promise<any>}
 */
async function getMarchi(){
    const marchi = await Car.distinct("marca").then( result => {return result})
    return marchi;
}


/**
 * Metodo che mi ritorna i Modelli a partire dal Marchio
 * @param marchio
 * @returns {Promise<any>}
 */
async function getModelliByMarchio(marchio){
    const modelli = await Car.distinct("modello", {marca:marchio}).then(result => {return result})
    return modelli;
}



/**
 * Metodo che mi elimina il veicolo a partire dalla targa
 * @param targa
 * @returns {Promise<EsitoResponse>}
 */
async function deleteCar(targa){

    const result = await Car.deleteOne({targa:targa}).then( result => {return result})

    if ( result.deletedCount === 0) return new EsitoResponse(false, "Eliminazione fallita")
    else return new EsitoResponse(true, "Eliminazione avvenuta con successo")
}



/**
 * Metodo che mi realizza l'update del veicolo
 * @param veicolo
 * @returns {Promise<EsitoResponse>}
 */
async function updateCar(veicolo){

    const result = await Car.updateOne({targa:veicolo.targa}, {$set: {modello: veicolo.modello, marca: veicolo.marca, colore: veicolo.colore, cilindrata: veicolo.cilindrata, porta: veicolo.porte, annoProduzione: veicolo.annoProduzione, dataImmatricolazione: veicolo.dataImmatricolazione}})
                                .then(result => {return result})


    if ( result.nModified === 0) return new EsitoResponse(false, "Update fallito")
    else return new EsitoResponse(true, "Update avvenuto con successo")

}
exports.rentalCarService = {getAllCars,
                            insertCar,
                            getDetailCarByTarga,
                            getMarchi,
                            getModelliByMarchio,
                            deleteCar,
                            updateCar}