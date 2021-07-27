/**
 * VehiculosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Vehiculos = require("../models/Vehiculos");

module.exports = {

    //MOSTRAR VEHICULOS
    find: async function (req, res) {
        var listaVehiculos = await vehiculos.find();
        return res.json(listaVehiculos);
    },


    //MOSTRAR VEHICULO
    findOne: async function (req, res) {
        var id = req.param('id');
        var vehiculo = await vehiculos.findOne(id);
        return res.json(vehiculo);
    },


    //CREAR UN NUEVO REGISTRO
    create: async function (req, res) {

        //Obtener datos
        var datos = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placas: req.body.placas,
            kilometraje: req.body.kilometraje,
            NoSerie: req.body.NoSerie,
        };

        //Crear vehiculo
        var vehiculo = await vehiculos.create(datos).fetch();
        return res.json(vehiculo);

    },

    //MODIFICAR UN REGISTRO
    update: async function (req, res) {
        var id = req.param('id');
        var datos = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placas: req.body.placas,
            kilometraje: req.body.kilometraje,
            NoSerie: req.body.NoSerie,
        };

        //Obtener kilometraje anterior
        var vehiculo = await vehiculos.findOne(id);
        var kilometrajeNuevo = datos.kilometraje;

        //Comparar kilometraje actual con anterior
        if (kilometrajeNuevo > vehiculo.kilometraje) {
            var vehiculoActualizado = await vehiculos.updateOne({ id: id }).set(datos);
            return res.json(vehiculoActualizado);
        } else {
            return res.status(400).json({ error: 'Kilometraje ingresado debe ser mayor al anterior' });
        }

    },

    //ELIMINAR UN VEHICULO
    destroy: async function (req, res) {
        var id = req.param('id');
        var vehiculoEliminar = await vehiculos.archiveOne({ id: id })
        return res.json(vehiculoEliminar);
    },


    //};
};

