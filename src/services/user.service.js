const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const getUserByUsernameService = async (username) => {
    try {
        const result = await dynamodb.scan({
            TableName: 'userawsTable', // Ajusta el nombre de la tabla según tu configuración
            FilterExpression: 'username = :username',
            ExpressionAttributeValues: {
                ':username': username
            }
        }).promise();
        
        return result.Items[0]; // Devuelve el primer usuario con el mismo nombre de usuario (si existe)
    } catch (error) {
        console.log('Se detectó un error en getUserByUsernameService: ', error);
        throw error;
    }
};

const createUserService = async (user) => {
    try {
        await dynamodb.put({
            TableName: 'userawsTable',
            Item: user,
        }).promise();
    } catch (error) {
        console.log('Se detectó un error en createUser service: ', error);
        throw error;
    }
};

const getUserService = async (id) => {
    try {
        const result = await dynamodb.get({
            TableName: 'userawsTable',
            Key: {
                id
            }
        }).promise();

        return result.Item;
    } catch (error) {
        console.log('Se detectó un error en getUser service: ', error);
        throw error;
    }
};

const getUsersService = async () => {
    try {
        const result = await dynamodb.scan({
            TableName: 'userawsTable'
        }).promise();

        return result.Items;
    } catch (error) {
        console.log('Se detectó un error en getUsers service: ', error);
        throw error;
    }
};

const updateUserService = async (id, data) => {
    try {
        await dynamodb.update({
            TableName: "userawsTable",
            Key: { id },
            UpdateExpression: "set username = :username, lastname = :lastname, job = :job, age = :age",
            ExpressionAttributeValues: {
                ":username": data.username,
                ":lastname": data.lastname,
                ":job": data.job,
                ":age": data.age
            },
            ReturnValues: "ALL_NEW",
        }).promise();
    } catch (error) {
        console.log('Se detectó un error en updateUser service: ', error);
        throw error;
    }
};

const deleteUserService = async (id) => {
    try {
        await dynamodb.delete({
            TableName: "userawsTable",
            Key: {
                id,
            },
        }).promise();
    } catch (error) {
        console.log('Se detectó un error en deleteUser service: ', error);
        throw error;
    }
};

module.exports = {
    createUserService,
    getUserService,
    getUserByUsernameService,
    getUsersService,
    updateUserService,
    deleteUserService
};