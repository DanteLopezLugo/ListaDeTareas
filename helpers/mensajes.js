const { rejects } = require('assert');
const colors = require('colors');
const { resolve } = require('path');

const mostrarMenu = () => {

    return new Promise( (resolve , rejects) => {

        console.log('============================='.rainbow);
        console.log('====Seleccione una opcion===='.rainbow);
        console.log('============================='.rainbow);
    
        console.log(`1. Crear tarea`);
        console.log(`2. Listar tarea`);
        console.log(`3. Listar tareas completadas`);
        console.log(`4. Listar tareas pendientes`);
        console.log(`5. Completar tareas`);
        console.log(`6. Borrar tareas`);
        console.log(`0. Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opcion) => {
            readline.close();
            resolve(opcion);
        });
    });
}

const pausa = () => {

    return new Promise( (resolve , rejects) => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Presione ENTER para continuar : ', (opcion) => {
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}