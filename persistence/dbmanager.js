var mongoose = require('mongoose');

var dev_db_url = "mongodb+srv://william:root@cluster0.nvdtj.mongodb.net/williamVDB?retryWrites=true&w=majority";

var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB conecction error :'));

var Producto = require('./producto');

//////////////////// CRUD OPERATIONS ///////////////////////

////// Create --------

exports.producto_create = function(req,res){

    var producto = new Producto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        precio: req.body.precio,
        existencia: req.body.existencia
    });

    producto.save(function(err){
        if(err){
            return next(err);
        }
        res.send({'message':'ok'});
        
    });

}

////// Read --------

exports.producto_read = function(req,res){

    Producto.findById(req.query.id, function(err,Producto){
        if(err){
            return next(err)
        }
        res.send(Producto)
    })
}

////// Update --------

exports.producto_update = function(req,res){
    Producto.findByIdAndUpdate(req.query.id,{$set:req.body}, function(err,Producto){
        if(err){
            return next(err)
        }
        res.send({'message':'UPDATE'})
    })
}

////// Delete --------

exports.producto_delete = function(req,res){
    Producto.findByIdAndRemove(req.query.id, function(err,Producto){
        if(err){
            return next(err)
        }
        res.send({'message':'delete'})
    })
}