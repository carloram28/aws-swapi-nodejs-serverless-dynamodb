'use strict';

const {getFilmsService,
       getPeopleService,
       getPlanetsService,
       getSpeciesService,
       getStarshipsService,
       getVehiclesService
      }= require('../services/swapi.service');


module.exports.getFilms = async () => {
  try {
    const films = await getFilmsService();
    return {
      statusCode: 200,
      body: JSON.stringify(films),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching film data' }),
    };
  }
};

module.exports.getPeople = async () => {
  try {
    const people = await getPeopleService();
    return {
      statusCode: 200,
      body: JSON.stringify(people),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching people data' }),
    };
  }
};


module.exports.getPlanets = async () => {
  try {
    const planets = await getPlanetsService();
    return {
      statusCode: 200,
      body: JSON.stringify(planets),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching planets data' }),
    };
  }
};

module.exports.getSpecies = async () => {
  try {
    const species = await getSpeciesService();
    return {
      statusCode: 200,
      body: JSON.stringify(species),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching species data' }),
    };
  }
};

module.exports.getStarships = async () => {
  try {
    const starships = await getStarshipsService();
    return {
      statusCode: 200,
      body: JSON.stringify(starships),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching starships data' }),
    };
  }
};

module.exports.getVehicles = async () => {
  try {
    const vehicles = await getVehiclesService();
    return {
      statusCode: 200,
      body: JSON.stringify(vehicles),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching vehicles data' }),
    };
  }
};




