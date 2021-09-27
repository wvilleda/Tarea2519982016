const express= require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
app.use(cors());

const db_manager = require('./persistence/dbmanager');

///////CRUD/////////
///// Create -Post-----
app.post('/producto/create',(req,res) => {
    db_manager.producto_create(req,res)
})

///// Read - get-----
app.get('/producto/read',(req,res) => {
    db_manager.producto_read(req,res)
})
///// Update -Put-----
app.put('/producto/update',(req,res) => {
    db_manager.producto_update(req,res)
})
///// Delete - Delete----
app.delete('/producto/delete',(req,res) => {
    db_manager.producto_delete(req,res)
})



app.get('/',(req, res) =>{
    res.send("Hola Mundo")
})

app.listen(process.env.PORT || 8985,() => {
    console.log("API REST is running !!!!!")
})
