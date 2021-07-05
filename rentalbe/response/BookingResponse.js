
class BookingResponse{

    constructor(codicePrenotazione, dataInizio, dataFine, targaVeicolo, usernameUtente) {
        this._codicePrenotazione = codicePrenotazione;
        this._dataInizio = dataInizio;
        this._dataFine = dataFine;
        this._targaVeicolo = targaVeicolo;
        this._usernameUtente = usernameUtente;
    }


    get codicePrenotazione() {
        return this._codicePrenotazione;
    }

    set codicePrenotazione(value) {
        this._codicePrenotazione = value;
    }

    get dataInizio() {
        return this._dataInizio;
    }

    set dataInizio(value) {
        this._dataInizio = value;
    }

    get dataFine() {
        return this._dataFine;
    }

    set dataFine(value) {
        this._dataFine = value;
    }

    get targaVeicolo() {
        return this._targaVeicolo;
    }

    set targaVeicolo(value) {
        this._targaVeicolo = value;
    }

    get usernameUtente() {
        return this._usernameUtente;
    }

    set usernameUtente(value) {
        this._usernameUtente = value;
    }
}

module.exports = BookingResponse;