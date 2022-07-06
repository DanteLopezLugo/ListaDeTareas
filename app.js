
const { inquirerMenu, inquirerPausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {

    let opcion = '';
    const tareas = new Tareas();

    do {
        opcion = await inquirerMenu();

        switch (opcion) {
            case '1':
                const leer = await leerInput('Descripcion : ');
                tareas.crearTarea( leer );
            break;
            case '2':
                console.log( tareas.listado );
            break;
            case '3':
                
            break;
        }

        await inquirerPausa();

    } while (opcion !== '0');

};

main();