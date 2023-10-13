const aws = require("aws-sdk");
let dynamoDBClientParams = {}
console.log(process.env.IS_OFFLINE)
if (process.env.IS_OFFLINE) {
        dynamoDBClientParams = {    
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
        secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
    }
}

const dynamodb = new aws.DynamoDB.DocumentClient(dynamoDBClientParams);

const getUsersById = async (event, context) => {

    let userId = event.pathParameters ? event.pathParameters.id : '1';

    var params = {
        ExpressionAttributeValues: { ':pk' : userId },
        KeyConditionExpression: 'pk = :pk',
        TableName: 'usuario'
    }

    return dynamodb.query(params).promise().then(res =>{
        console.log("Esto es un test");
        console.log(res);
        return {
            "statusCode": 200,
            "body": JSON.stringify(res.Items)
        }
    }).catch((err)=>{
        console.log(err);
        return {
            "statusCode": 500,
            "body": JSON.stringify({mensaje:"Algo salió mal, intente nuevamente por favor."})
        }
    });

}

const getUsers = async (event, context) => {
    var params = {
        TableName: 'usuario'
    }
    return dynamodb.query(params).promise().then(res =>{
        console.log("Esto es un test");
        console.log(res);
        return {
            "statusCode": 200,
            "body": JSON.stringify(res.Items)
        }
    }).catch((err)=>{
        console.log(err);
        return {
            "statusCode": 500,
            "body": JSON.stringify({mensaje:"Algo salió mal, intente nuevamente por favor."})
        }
    });

}

module.exports = {
    getUsersById,
    getUsers
}
