const inquirer = require('inquirer');
const colors = require('colors');

const menuPreguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Opcion a realizar',
        choices: [
            {
                name: 'Crear tarea',
                value: '1'
            },
            {
                name: 'Listar tarea',
                value: '2'
            },
            {
                name: 'Listar tareas completadas',
                value: '3'
            },
            {
                name: 'Listar tareas pendientes',
                value: '4'
            },
            {
                name: 'Completar tareas',
                value: '5'
            },
            {
                name: 'Borrar tareas',
                value: '6'
            },
            {
                name: 'Salir',
                value: '0'
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.log('============================='.rainbow);
    console.log('====Seleccione una opcion===='.rainbow);
    console.log('============================='.rainbow);

    const {opcion} = await inquirer.prompt(menuPreguntas);
    return opcion;

};

const inquirerPausa = async() => {
    
    const pausa = [
        {
            type: 'input',
            name: 'enter',
            message: `Precione ${'ENTER'.rainbow} para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt(pausa);

}

const leerInput = async( mensaje ) => {
    const pregunta = [
        {
            type: 'input',
            name: 'descripcion',
            message: mensaje,
            validate( value ){
                if(value.length == 0) return 'Porfavor ingrese un valor'
                return true;
            }
        }
    ];

    const {descripcion} = await inquirer.prompt(pregunta);
    return descripcion;
};

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput
}