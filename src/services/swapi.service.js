const axios = require('axios');
const filmAdapter = require('../../mapper/filmsAdapter');
const peopleAdapter = require('../../mapper/peopleAdapter');
const planetAdapter = require('../../mapper/planetsAdapter');
const speciesAdapter = require('../../mapper/speciesAdapter');
const starshipAdapter = require('../../mapper/starshipsAdapter');
const vehicleAdapter = require('../../mapper/starshipsAdapter');

module.exports.getFilmsService = async () => {
  const API_URL = 'https://swapi.py4e.com/api/films';
  try {
    const response = await axios.get(API_URL);
    const films = response.data.results.map(filmAdapter.translate);
    return films;
  } catch (error) {
    throw new Error('An error occurred while fetching film data');
  }
};
module.exports.getPeopleService = async () => {
    const API_URL = 'https://swapi.py4e.com/api/people';
    try {
      const response = await axios.get(API_URL);
      const people = response.data.results.map(peopleAdapter.translate);
      return people;
    } catch (error) {
      throw new Error('An error occurred while fetching film data');
    }
  };
  module.exports.getPlanetsService = async () => {
    const API_URL = 'https://swapi.py4e.com/api/planets';
    try {
      const response = await axios.get(API_URL);
      const planets = response.data.results.map(planetAdapter.translate);
      return planets;
    } catch (error) {
      throw new Error('An error occurred while fetching film data');
    }
  };
  module.exports.getSpeciesService = async () => {
    const API_URL = 'https://swapi.py4e.com/api/species';
    try {
      const response = await axios.get(API_URL);
      const species = response.data.results.map(speciesAdapter.translate);
      return species;
    } catch (error) {
      throw new Error('An error occurred while fetching film data');
    }
  };
  module.exports.getStarshipsService = async () => {
    const API_URL = 'https://swapi.py4e.com/api/starships';
    try {
      const response = await axios.get(API_URL);
      const starships = response.data.results.map(starshipAdapter.translate);
      return starships;
    } catch (error) {
      throw new Error('An error occurred while fetching film data');
    }
  };

  module.exports.getVehiclesService = async () => {
    const API_URL = 'https://swapi.py4e.com/api/vehicles';
    try {
      const response = await axios.get(API_URL);
      const vehicles = response.data.results.map(vehicleAdapter.translate);
      return vehicles;
    } catch (error) {
      throw new Error('An error occurred while fetching film data');
    }
  };


