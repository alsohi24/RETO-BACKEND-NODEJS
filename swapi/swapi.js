const axios = require('axios');
const ROOT_PATH = "https://swapi.dev/api/";

let headerParam = {
    "content-type": "application/json",
  };

let ax = axios.create({
    baseURL: ROOT_PATH,
    headers: headerParam,
  });

class swapiEngine {
    constructor() {
    }
    getRecords = async (model, params) => {
      try {
        const response = await ax.get(`${model}/`, {
          params: params
        });
        if (response.status === 200) {
          return response.data.results;
        } else {
          throw new Error('La solicitud no tuvo éxito.');
        }
      } catch (error) {
        console.error('Error al obtener datos de SWAPI:', error);
        return [1,2];
      }
    };
  
    getOneRecord = async (model, id) => {
      let res = await ax.get(`${model}/${id}/`);
      return res;
    }
  
    // updateRecord = (model, body) => {
    //   return ax.patch(`${model}/`, {
    //     "resource": body
    //   });
    // }
  
    // addRecord = (model, body) => {
    //   return ax.post(`${model}/`, {
    //     "resource": body
    //   });
    // } 
}

module.exports = {
    swapiEngine
}