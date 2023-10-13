const {swapiEngine} = require('./swapi')
const {getTranslateToSpanish} = require('../utils/handler');

const convertModelToSpanish = async (objEnglish)  => {
    const objSpanish = {};
    for (const attribute in objEnglish) {
        objSpanish[await getTranslateToSpanish(attribute)] = objEnglish[attribute];
    }
    console.log(objSpanish)
    return objSpanish;
  }

const getSwapiRecords = async (event, context) => {
    let resource = event.pathParameters ? event.pathParameters.resource : 'noDefined';
    let sw = new swapiEngine();
    let records = await sw.getRecords(resource,{});
    console.log(records)
    return {
        "statusCode": 200,
        "body": JSON.stringify(records)
    };
}

const getSwapiRecordsToSpanish = async (event, context) => {
    let resource = event.pathParameters ? event.pathParameters.resource : 'starships';
    let sw = new swapiEngine();
    let records = await sw.getRecords(resource,{});
    let translatedArray = records.map(async a => await convertModelToSpanish(a));
    
    return Promise.all(translatedArray).then(records => {
        return {
            "statusCode": 200,
            "body": JSON.stringify(records)
        };
      });
}

module.exports = {
    getSwapiRecords,
    getSwapiRecordsToSpanish
}
