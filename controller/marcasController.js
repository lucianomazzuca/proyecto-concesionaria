const dbConcesionaria = require('../dbConcesionaria');

const marcasController = {
    index: function(req, res){
        res.write('Estas son las marcas de autos que tenemos: \n\n');

        let arrayFiltrado = [];

        dbConcesionaria.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                if(arrayFiltrado.indexOf(auto.marca) == -1){
                    arrayFiltrado.push(auto.marca);
                }
            })
        })

        arrayFiltrado.forEach(marca => {
            res.write(marca + '\n');
        })

        res.end();
    },
    marca: function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        let marca = req.params.marca;
        let cantidad = 0;
        let arrayAutos = [];

        res.write('Autos de la marca ' + marca + '\n');
        res.write('-------------------------------------------\n');

        dbConcesionaria.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                if(marca == auto.marca){
                    cantidad++;
                    res.write(`Modelo: ${auto.modelo}  Año: ${auto.anio} \n`);
                }
            })
        })

        if(cantidad == 0) {
            res.end('No tenemos autos de esa marca');
        }
        else{
            res.end('\nCantidad de autos: ' + cantidad);
        }
    }

}

module.exports = marcasController;