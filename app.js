const argv=require(`./config/yargs`).argv;
const {getLugarLatlng}=require(`./httpfunction/axios`);
const {getClima}=require(`./httpfunction/clima`);

/*
asi se debe construir una url get
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
*/ 



//getClima(4.60769,-74.11439).then(result=>console.log(result));


const getInfo= async(direccion)=>{

    const place= await getLugarLatlng(direccion);

     getClima(place.latitud,place.longitud)
     .then(result=>console.log(`El clima de ${place.direccion} es de ${result}`))
     .catch(err=>console.log(`No se pudo determinar el clima de ${place.direccion} error ${err}`));
}

getInfo(argv.direccion);