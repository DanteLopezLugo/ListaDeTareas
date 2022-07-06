const { v4: uuid } = require('uuid');

class Tarea {

    id = '';
    descripcion = '';
    fechaCompletado = null;

    constructor( descripcion ){

        this.id = uuid();
        this.descripcion = descripcion;
        this.fechaCompletado;

    }

}

module.exports = Tarea