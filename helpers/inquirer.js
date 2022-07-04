const inquirer = require('inquirer');

const menuPreguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Opcion a realizar',
        choices: ['Crear tarea',
        'Listar tarea',
        'Listar tareas completadas',
        'Listar tareas pendientes',
        'Completar tareas',
        'Borrar tareas',
        'Salir'
        ]
    }
]

const inquirerMenu = async() => {

    console.log('============================='.rainbow);
    console.log('====Seleccione una opcion===='.rainbow);
    console.log('============================='.rainbow);

    const opcion = await inquirer.prompt(menuPreguntas);
    return opcion;
    // inquirer
    //     .prompt([

    //     ])
    //     .then((answers) => {

    //     })
    //     .catch((error) => {
    //         if(error.isTtyError){

    //         }
    //         else{

    //         }
    //     });

};

module.exports = {
    inquirerMenu
}