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
        return [];
      }
    };
  
    getOneRecord = async (model, id) => {
      try {
        console.log(model,id)
        const response = await ax.get(`${model}/${id}/`);
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error('La solicitud no tuvo éxito.');
        }
      } catch (error) {
        console.error('Error al obtener datos de SWAPI:', error);
        return [];
      }
    }
}

module.exports = {
    swapiEngine
}