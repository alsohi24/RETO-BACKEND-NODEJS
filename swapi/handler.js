const {swapiEngine} = require('./swapi')

const getSwapiRecords = async (event, context) => {
    let sw = new swapiEngine();
    let starships = await sw.getRecords('starships',{});
    console.log(starships)
    return {
        "statusCode": 200,
        "body": starships
    };
}

module.exports = {
    getSwapiRecords
}
