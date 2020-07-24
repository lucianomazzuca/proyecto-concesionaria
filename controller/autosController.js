const dbConcesionaria = require('../dbConcesionaria');

const autosController = {
    index: function(req, res){
        res.write('ruta autos');

        dbConcesionaria.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                res.write(`${auto.marca} ${auto.modelo} ${auto.anio} ${auto.color}\n`);
            })
            res.end('Cantidad de autos: ' + concesionaria.autos.length)
        })
        res.end();
    }
}


module.exports = autosController;
