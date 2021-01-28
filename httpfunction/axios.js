const axios = require('axios');


/*
const instance = axios.create({
    baseURL: `https://geocode.xyz/locate=${argv.direccion}?json=1`,
    //timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  en caso de usar headers

instance.get()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .then(function () {
    // always executed
  });


*/
const getLugarLatlng= async (address)=>{
    const encodedUrl= encodeURI(address)
   /* 
   se cambia debido a que queremos sacarle valores a eso
   
   axios.get(`https://geocode.xyz/locate=${encodedUrl}?json=1`)
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
  .then(function () {
    // always executed
  });*/
  const resp = await axios.get(`https://geocode.xyz/locate=${encodedUrl}?json=1`);
  if(resp.data.error!=null){
        throw new Error(`${resp.data.error.code} no har resultados ${resp.data.error.description}`)
  }
  const direccion=`${resp.data.standard.city} ${resp.data.standard.countryname}`;
  const latitud=resp.data.latt;
  const longitud=resp.data.longt;
  return{direccion,latitud,longitud}
}

module.exports={
    getLugarLatlng
}