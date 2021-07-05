const User = require('../entity/User')
const UserResponse = require('../response/UserResponse')
const EsitoResponse = require('../response/EsitoResponse')

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

    const elem = new User({
        username: user.username,
        password: user.password,
        nome: user.nome,
        cognome: user.cognome,
        dataDiNascita: user.dataDiNascita,
        ruolo: user.ruolo
    })

    return await elem.save().then( result => {return new EsitoResponse(true, "Salvataggio avvenuto")})
        .catch(err => {return new EsitoResponse(false, "Salvataggio fallito")})
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



async function bookingCar() {



}


exports.userService = {getAllUsers,
                        insertUser,
                        deleteUser,
                        bookingCar,
}