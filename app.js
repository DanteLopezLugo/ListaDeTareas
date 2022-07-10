
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, inquirerPausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {

    let opcion = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        opcion = await inquirerMenu();

        switch (opcion) {
            case '1':
                const leer = await leerInput('Descripcion : ');
                tareas.crearTarea( leer );
            break;
            case '2':
                // const lista = tareas.listadoArray;
                // console.log(lista);
                tareas.listadoCompleto();
            break;
            case '3':
                
            break;
            case '4':
                
            break;
            case '5':
                
            break;
            case '6':
                
            break;
        }

        guardarDB( tareas.listadoArray );

        await inquirerPausa();

    } while (opcion !== '0');

};

main();