
/**Entities**/
const User = require('../entity/User')
const Booking = require('../entity/Booking')

/**Response**/
const UserResponse = require('../response/UserResponse')
const EsitoResponse = require('../response/EsitoResponse')
const BookingResponse = require('../response/BookingResponse')

/**Utility**/
const utility = require('../utility/Utility')



/**
 * Metodo che mi ritorna tutti gli utenti registrati
 * @returns {Promise<[UserResponse]>}
 */
async function getAllUsers(){

    let userList = [];
    let userResponseList = [];
    userList = await User.find().then(result => {return result}).catch(err => {console.log(err)})

    userList.forEach(elem => {
        const userResponse = new UserResponse(elem.username, elem.nome, elem.cognome, elem.dataDiNascita, elem.password, elem.ruolo)
        userResponseList.push(userResponse)
    })

    return userResponseList;
}



/**
 * Metodo che mi inserice un nuovo utente
 * @returns {Promise<EsitoResponse>}
 */
async function insertUser(user){

    let userExist = null;
    //Vado a vedere se lo username inserito già esiste all'interno del DB
    userExist = User.findOne({username:user.username}).then(result => {return result});

    //Se esiste e quindi ritorna l'utente ottenuto dallo username, allora l'inserimento è fallito
    if (userExist !== null) return new EsitoResponse(false, "Username già esistente")

    const elem = new User({
        username: user.username,
        password: user.password,
        nome: user.nome,
        cognome: user.cognome,
        dataDiNascita: user.dataDiNascita,
        ruolo: user.ruolo
    })

    return await elem.save().then( result => {return new EsitoResponse(true, "Salvataggio avvenuto")})
        .catch(err => {console.log(err); return new EsitoResponse(false, "Salvataggio fallito")})
}

/**
 * Metodo che mi va a realizzare l'update dell'utente
 * @param user
 * @returns {Promise<any>}
 */
async function updateUser(user){

    return await User.updateOne({username:user.username}, {$set: {password:user.password, nome: user.nome, cognome: user.cognome, dataDiNascita: user.dataDiNascita, ruolo: user.ruolo}})
        .then( result => {return new EsitoResponse(true, "Modifica effettuata")})
        .catch( err => {console.log(err); return new EsitoResponse(false, "Modifica fallita")})
}



/**
 * Metodo per eliminare un utente
 * @param username
 * @returns {Promise<EsitoResponse>}
 */
async function deleteUser(username){

    const result = await User.deleteOne({username:username}).then(result => {return result})

    if ( result.deletedCount === 0) return new EsitoResponse(false, "Eliminazione fallita")
    else return new EsitoResponse(true, "Eliminazione avvenuta con successo")
}



/**
 * Metodo che mi va a realizzare la prenotazione
 * @param booking
 * @returns {Promise<EsitoResponse>}
 */
async function bookingCar(booking) {

    let exist = true;
    let bookingList = [];
    let codiceAlfaNum = '';

    //Vado a verificare se il codice alfanumerico già esiste, se già esiste ne vado a creare un nuovo
    while (exist) {
        codiceAlfaNum = utility.utility.randomCode(3);
        exist = await Booking.exists({codicePrenotazione: codiceAlfaNum}).then(result => {return result});
    }

    const elem = new Booking({
        codicePrenotazione: codiceAlfaNum,
        dataInizio: new Date().toISOString().slice(0,10),
        dataFine: new Date().toISOString().slice(0,10),
        targaVeicolo: 'DB156NV',
        usernameUtente: 'sourheart'
    })


    //Vado a verificare se sono già presenti prenotazioni per quella macchina nelle date selezionate
    bookingList = await Booking.find({targa: elem.targa, dataInizio: {$gte: elem.dataInizio, $lte: elem.dataFine}, dataFine: {$gte: elem.dataInizio, $lte: elem.dataFine}})
        .then(result => {return result})
    //Se bookingList è diverso da 0 allora ci sono prenotazioni, questo vuol dire che non posso prenotare quella macchina
    if (bookingList.length !== 0) return new EsitoResponse(false, "Auto non disponibile nelle date selezionate");


    //Salvo la prenotazione
    return elem.save().then(result => {return new EsitoResponse(true, "Prenotazione registrata")})
        .catch(err => {return new EsitoResponse(false, "Prenotazione fallita"); console.log(err)})
}



/**
 * Metodo che mi va a cancellare la prenotazione
 * @param codicePrenotazione
 * @returns {Promise<EsitoResponse>}
 */
async function deleteBooking(codicePrenotazione){

    const esito = await Booking.deleteOne({codicePrenotazione: codicePrenotazione}).then(result => {return result})
                    .catch(err => {console.log(err)})

    if( esito.deletedCount !== 0) return new EsitoResponse(true,"Cancellazione Effettuata con successo")
    else return new EsitoResponse(false, "Cancellazione fallita")
}



/**
 * Metodo che mi ritorna tutte le prenotazioni
 * @returns {Promise<[BookingResponse]>}
 */
async function getAllBooking(){
    let listBooking = [];
    let listBookingResponse = [];
    listBooking = await Booking.find().then(result => {return result})
                        .catch(err => {console.log(err)})

    listBooking.forEach(elem => {
        bookingResponse = new BookingResponse(elem.codicePrenotazione, elem.dataInizio, elem.dataFine, elem.targaVeicolo, elem.usernameUtente);
        listBookingResponse.push(bookingResponse);
    })
    return listBookingResponse;
}



async function  validationBooking(idBooking){
    let booking = {};
    booking = await Booking.findOne({codicePrenotazione:idBooking}).then(result => {return result})
        .catch(err => {console.log(err); return null})

    if( booking === null || booking === {}) {
        return new EsitoResponse(false, "Prenotazione non trovata")
    }
    else {
        return await Booking.updateOne({codicePrenotazione:idBooking}, {$set: {validata:true}})
            .then( result => {return new EsitoResponse(true, "Validazione effettuata")})
            .catch( err => {console.log(err); return new EsitoResponse(false, "Validazione fallita")})
    }
}



exports.userService = {getAllUsers,
                        insertUser,
                        deleteUser,
                        bookingCar,
                        deleteBooking,
                        getAllBooking,
                        updateUser,
                        validationBooking,
}