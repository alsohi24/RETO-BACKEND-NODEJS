const {Translate} = require('@google-cloud/translate').v2;
const projectId = 'arqstyle';
const translate = new Translate({
    projectId: projectId,
    key: 'AIzaSyBp86nKTQAzv_9y0UgLyZzt_TPkZ3zqs9Q'
  });

  function convertirAModeloEnEspanol(modeloIngles) {
    const modeloEspanol = {};
    for (const atributo in modeloIngles) {
      if (mapeo[atributo]) {
        modeloEspanol[mapeo[atributo]] = modeloIngles[atributo];
      } else {
        modeloEspanol[atributo] = modeloIngles[atributo];
      }
    }
    return modeloEspanol;
  }
  
const getTranslateSpanish = async (event, context) => {
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

module.exports = {
    getTranslateSpanish
}
