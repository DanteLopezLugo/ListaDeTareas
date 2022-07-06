const Tarea = require("./tarea");

class Tareas {

    listado = {};

    constructor(){
        this.listado = {};
    }

    crearTarea( descripcion ){

        const tarea = new Tarea( descripcion );
        this.listado[tarea.id] = tarea;

    }

}

module.exports = Tareas;