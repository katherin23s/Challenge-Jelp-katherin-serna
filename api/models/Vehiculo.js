/**
 * Vehiculo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Vehiculos',
  attributes: {
    marca:{
      type:'string'
    },
    modelo:{
      type:'string'
    },
    ano:{
      type:'number'
    },

    placas:{
      type:'string'
    },

    kilometraje:{
      type:'number'
    },

    NoSerie:{
      type:'string'
    },
  },

};
