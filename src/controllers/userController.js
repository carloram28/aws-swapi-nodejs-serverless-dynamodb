const { v4 } = require('uuid');

const middy = require('@middy/core');
const jsonBodyParser = require('@middy/http-json-body-parser');
const { createUserService,getUserService,getUsersService,updateUserService,deleteUserService,getUserByUsernameService } = require('../services/user.service');

const createUserController = async (event) => {
    
    const createdAt = new Date();
    const id = v4();
    const { username, lastname, job, age } = event.body;
    console.log(event.body);

    // Verificar si el usuario ya existe
    const existingUser = await getUserByUsernameService(username);

    if (existingUser) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Username already exists",
            })
        };
    }
    
    const newUser = {
        id,
        createdAt,
        username,
        lastname,
        job,
        age,
    } 
    try{
        await createUserService(newUser)
        
    
        return {
            status: 200,
            body:newUser,
            
            
        }
    }catch(e){
        console.log('Se detecto un error al crear el elemento: ', e);
    }
};

const getUserController = async (event) => {
  try {
      const { id } = event.pathParameters;
      const user = await getUserService(id);

      return {
          statusCode: 200,
          body: JSON.stringify(user)
      };
  } catch (error) {
      console.log('Se detectó un error en getUserController: ', error);
      return {
          statusCode: 500,
          body: JSON.stringify({
              message: "Error retrieving user",
          })
      };
  }
};

const getUsersController = async (event) => {
  try {
      const users = await getUsersService();

      return {
          statusCode: 200,
          body: JSON.stringify(users)
      };
  } catch (error) {
      console.log('Se detectó un error en getUsersController: ', error);
      return {
          statusCode: 500,
          body: JSON.stringify({
              message: "Error  users",
          })
      };
  }
};

const updateUserController = async (event) => {
    try{
      
      const { id } = event.pathParameters;
      const { username, lastname, job, age } = JSON.parse(event.body);
  
      await updateUserService(id, { username, lastname, job, age })
      
      return {
        status: 200,
        body: ({
          message: "User updated successfully",
        }),
        
      };
    }catch(e){
      console.log('Se detecto el siguiente error: ', e);
    }
  };
  const deleteUserController = async (event) => {
    
    const { id } = event.pathParameters;
  
    try{
      await deleteUserService(id);
      return {
        status: 200,
        body: ({
          message: "Deleted user successfully",
        })
      };
    }catch(e){
      console.log('Se detecto un error: ', e);
    }
  };
  module.exports = {
    createUserController:middy(createUserController).use(jsonBodyParser()),
    getUserController,
    getUsersController,
    updateUserController,
    deleteUserController
  };