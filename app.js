const colors = require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {

    let opcion = '';

    do {

        opcion = await mostrarMenu();
        await pausa();

    } while (opcion !== '0');

};

main();