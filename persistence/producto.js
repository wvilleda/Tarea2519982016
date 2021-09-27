var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductosSchema = new Schema({
    codigo: {type:String, required:true},
    nombre: {type:String, required:true, max: 50},
    precio: {type:String, required:true},
    existencia: {type:String, required:true}
});

module.exports = mongoose.model('Producto',ProductosSchema);