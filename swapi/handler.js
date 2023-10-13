const {swapiEngine} = require('./swapi')

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

module.exports = {
    getSwapiRecords
}
