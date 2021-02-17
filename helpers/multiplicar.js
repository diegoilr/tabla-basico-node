const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (num = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {

            salida += `${num} x ${index} = ${index * num}\n`;

            consola += `${index} ${'x'.green} ${num} ${'= '.green} ${index * num}\n`
        }

        if (listar) {
            console.log('====================='.green)
            console.log(`     TABLA DEL`.green, colors.yellow(num))
            console.log('====================='.green)
            console.log(consola)
        }


        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);

        return `tabla-${num}.txt`;

    } catch (err) {
        return err
    }

}

module.exports = {
    crearArchivo
}