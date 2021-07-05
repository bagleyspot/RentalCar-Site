class UserResponse {

    constructor(username, nome, cognome, dataDiNascita, password, ruolo) {
        this._username = username;
        this._nome = nome;
        this._cognome = cognome;
        this._dataDiNascita = dataDiNascita;
        this._ruolo = ruolo;
        this._password = password;
    }


    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get cognome() {
        return this._cognome;
    }

    set cognome(value) {
        this._cognome = value;
    }

    get dataDiNascita() {
        return this._dataDiNascita;
    }

    set dataDiNascita(value) {
        this._dataDiNascita = value;
    }


    get ruolo() {
        return this._ruolo;
    }

    set ruolo(value) {
        this._ruolo = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}

module.exports = UserResponse;