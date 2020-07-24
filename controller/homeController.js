let fs = require('fs');
let dbConcesionaria = require('../dbConcesionaria');


const homeController = {
    index: function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('Bienvenido a nuestra página!');
        res.write('\n------------------------------');
        res.write('\n\nTenemos sucursales en: \n\n');
        //Mostrar sucursales
        dbConcesionaria.forEach((concesionaria)=>{
            res.write(` -${concesionaria.sucursal}\n`)  
        })
        res.end()
    },
    
}

module.exports = homeController;

// res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })