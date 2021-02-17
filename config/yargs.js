const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base para la tabla de multiplicación'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muesta la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'El numero hasta que se hará la multiplicación'
    })
    .check((argv, optons) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .check((argv, optons) => {
        if (isNaN(argv.h)) {
            throw 'El hasta tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;