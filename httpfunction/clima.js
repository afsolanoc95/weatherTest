const axios = require('axios');

const getClima= async (latitud,longitud)=>{
  const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=048f8a2bcb0869a0430db8e2f75ec2fb&units=metric`);
  return resp.data.main.temp;
}

module.exports={
    getClima
}