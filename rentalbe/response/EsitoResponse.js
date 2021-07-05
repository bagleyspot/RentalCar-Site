class EsitoResponse{

    constructor(esito, messaggio) {
        this._esito = esito;
        this._messaggio = messaggio;
    }


    get esito() {
        return this._esito;
    }

    set esito(value) {
        this._esito = value;
    }

    get messaggio() {
        return this._messaggio;
    }

    set messaggio(value) {
        this._messaggio = value;
    }
}

module.exports = EsitoResponse;