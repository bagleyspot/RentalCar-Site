class CarResponse {


    constructor(targa, modello, marca, colore, cilindrata, porte, annoProduzione, dataImmatricolazione) {

        this._targa = targa;
        this._modello = modello;
        this._marca = marca;
        this._colore = colore;
        this._cilindrata = cilindrata;
        this._porte = porte;
        this._annoProduzione = annoProduzione;
        this._dataImmatricolazione = dataImmatricolazione;
    }


    get targa() {
        return this._targa;
    }

    set targa(value) {
        this._targa = value;
    }

    get modello() {
        return this._modello;
    }

    set modello(value) {
        this._modello = value;
    }

    get marca() {
        return this._marca;
    }

    set marca(value) {
        this._marca = value;
    }

    get colore() {
        return this._colore;
    }

    set colore(value) {
        this._colore = value;
    }

    get cilindrata() {
        return this._cilindrata;
    }

    set cilindrata(value) {
        this._cilindrata = value;
    }

    get porte() {
        return this._porte;
    }

    set porte(value) {
        this._porte = value;
    }

    get annoProduzione() {
        return this._annoProduzione;
    }

    set annoProduzione(value) {
        this._annoProduzione = value;
    }

    get dataImmatricolazione() {
        return this._dataImmatricolazione;
    }

    set dataImmatricolazione(value) {
        this._dataImmatricolazione = value;
    }
}

module.exports = CarResponse;