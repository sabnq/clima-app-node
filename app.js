const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// const axios = require('axios');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);
        return `La temperatura en ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pude determinar el clima en ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

//Codigo para hacerlo con then, va a estar comentado
// lugar.getLugarLatLng(argv.direccion)
//     .then(respuesta => {
//         console.log(respuesta);
//         clima.getClima(respuesta.latitud, respuesta.longitud)
//             .then(res => {
//                 console.log(`La temperatura en ${respuesta.direccion} es de:`, res.temp);
//             })
//             .catch(error => console.log(error));

//     })
//     .catch(error => console.log(error));