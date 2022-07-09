const Tarea = require("./tarea");

class Tareas {

    listado = {};

    constructor(){
        this.listado = {};
    }

    get listadoArray() {
        const lista = [];
        Object.keys(this.listado).forEach( key => {
            lista.push(this.listado[key]);
        });
        return lista
    }

    crearTarea( descripcion ){

        const tarea = new Tarea( descripcion );
        this.listado[tarea.id] = tarea;

    }

    cargarTareasFromArray( tareas = [] ){

        tareas.forEach( tarea => {
            this.listado[tarea.id] = tarea;
        });

    }

}

module.exports = Tareas;