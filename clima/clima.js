const axios = require('axios');

const getClima = async(lat, lng) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)

    if (respuesta.data.cod === '400') {
        throw new Error(`No hay resultados de clima`);
    }

    let coors = respuesta.data.main;
    //Return usadoi para el codiog hecho por mi
    // return {
    //     temp: coors.temp
    // };

    return coors.temp;

}

module.exports = {
    getClima
}