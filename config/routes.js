/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
   /*'GET /Vehiculos': { view: '/vehiculos' },
   'GET /vehiculos/create': { action: 'create' },
   'POST /': { view: 'portal/login' },
   'GET /vehiculos/edit': { action: 'edit' },
   'PUT /vehiculos/{vehiculo}': { action: 'update' },
   'DELETE /vehiculos/{vehiculo}': { action: 'destroy' },*/
 
    'POST /vehiculo': 'VehiculosController.create',
    'GET /index': 'VehiculosController.show',
    'POST /vehiculo/update/:vehiculoId': 'VehiculosController.edit',
    'GET /vehiculo/delete/:vehiculoId': 'VehiculosController.delete',

};
