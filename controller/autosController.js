const dbConcesionaria = require('../dbConcesionaria');

const autosController = {
    index: function(req, res){
        res.write('Estos son todos nuestro autos: \n');
        res.write('--------------------------------\n\n')

        let cantidad = 0;

        dbConcesionaria.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                res.write(`${auto.marca} ${auto.modelo} ${auto.anio} ${auto.color}\n`);
                cantidad++;
            })
        })
        res.write('\n--------------------------------\n\n')
        res.end(`Tenemos ${cantidad.toString()} autos disponibles`);
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
                    res.write(`Marca: ${auto.marca}  Modelo: ${auto.modelo}  Año: ${auto.anio}  Color: ${auto.color} \n`);
                }
            })
        })

        if(cantidad == 0) {
            res.end('No tenemos autos de esa marca');
        }
        else{
            res.end('\nCantidad de autos: ' + cantidad);
        }
    },

    dato: function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        let marca = req.params.marca;
        let dato = req.params.dato;
        let cantidadAuto = 0;
        let checkMarca = false;

        res.write('');

        dbConcesionaria.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                if( marca == auto.marca){
                    checkMarca = true;
                    if ( dato == auto.anio || dato == auto.color){
                        cantidadAuto++
                        res.write(`Marca: ${auto.marca}  Modelo: ${auto.modelo}  Año: ${auto.anio}  Color: ${auto.color} \n`);
                    }
                }
            })
        })
    
        if(checkMarca == false){
            res.end("No tenemos  autos de esa marca");
        }
        else if(cantidadAuto == 0){
            res.end(`No tenemos autos de la marca ${marca} con ese color o año`);
        }
        else{
            res.end( "\nCantidad de autos: " + cantidadAuto);
        }

    }
}


module.exports = autosController;
