/**
 * Metodo che mi ritorna una stringa alfanumerica
 * @param length (Numero di Caratteri che devono formare il codice)
 * @returns {string}
 */
function randomCode(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;

    //Questa porzione di codice mi va a restituire la parte con caratteri del codice alfanuemrico
    for ( let i = 0 ; i< length ; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    //A questa parte io ci vado ad aggiungere invece la parte numerica
    result += Math.floor(Math.random() * 1000000);
    return result;
}

exports.utility = {randomCode}