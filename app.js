const { crearArchivo } = require('./helpers/multiplicar');
var colors = require('colors');
const argv = require('./config/yargs')


console.clear();
console.log(argv);
console.log('base yargs', argv.base)


crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err))
