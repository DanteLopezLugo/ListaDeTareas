
const { inquirerMenu } = require('./helpers/inquirer');
const { pausa } = require('./helpers/mensajes');

const main = async() => {

    let opcion = '';

    do {

        opcion = await inquirerMenu();
        console.log(opcion);
        await pausa();

    } while (opcion !== '0');

};

main();