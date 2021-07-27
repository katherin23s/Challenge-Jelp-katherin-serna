/**
 * Vehiculo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const VehiculosController = require("../controllers/VehiculosController");

module.exports = {
  // tableName: 'Vehiculos',
  identity: 'vehiculos',
  attributes: {
    marca: {
      type: 'string',
      required: true,
    },
    modelo: {
      type: 'string',
      required: true,
    },
    ano: {
      type: 'number',
      max: new Date().getFullYear(),
      min: 1940,
    },

    placas: {
      type: 'string',
      unique: true,
      required: true,
      regex: /[A-Z]{3}-[0-9]{2}-[0-9]{2}/,

    },

    kilometraje: {
      type: 'number',
    },

    NoSerie: {
      type: 'string',
      unique: true,
      required: true,
    },
  },

};

