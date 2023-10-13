const {Translate} = require('@google-cloud/translate').v2;
const PROJECT_ID = 'arqstyle';
const GOOGLE_API_KEY = 'AIzaSyBp86nKTQAzv_9y0UgLyZzt_TPkZ3zqs9Q';
const translate = new Translate({
    projectId: PROJECT_ID,
    key: GOOGLE_API_KEY
  });

const getTranslateToSpanishAPI = async (event, context) => {
    let textoAtraducir = event.pathParameters ? event.pathParameters.word : 'cheese';
    return translate.translate(textoAtraducir, 'es')
    .then(res =>{
        console.log(res)
        console.log(`Texto en inglés: ${textoAtraducir}`);
        console.log(`Traducción al español: ${res}`);
        return {
            "statusCode": 200,
            "body": JSON.stringify({ respuesta : `Traducción al español: ${res[0]}` })
        }
    }).catch((err)=>{
        console.log(err)
        return {
            "statusCode": 500,
            "body": JSON.stringify({ respuesta : `Algo salió mal, intente de nuevo` })
        }
    });

}

const getTranslateToSpanish = async (text) => {
    return translate.translate(text, 'es')
    .then(res =>{
        return res[0]
    }).catch((err)=>{
        console.log(err)
        return '';
    });
}

module.exports = {
    getTranslateToSpanishAPI,
    getTranslateToSpanish
}
