const dbConcesionaria = require('../dbConcesionaria');

const sucursalesController = {
    sucursalesDatos: function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('Estas son nuestras sucursales: \n\n')
        dbConcesionaria.forEach((concesionaria) => {
            res.write(`Sucursal: ${concesionaria.sucursal}\nDireccion: ${concesionaria.direccion}\nTelefono: ${concesionaria.telefono}\n\n\n`);
        })
        res.end()
    },
    sucursalDatos: function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        let nombre = req.params.sucursal.toLowerCase();
        
        dbConcesionaria.forEach((concesionaria) => {
            if( nombre == concesionaria.sucursal.toLowerCase() ) {
                res.write(`Sucursal: ${concesionaria.sucursal}\nDireccion: ${concesionaria.direccion}\nTelefono: ${concesionaria.telefono}\n\n`);
                res.write('\nEstos son los autos que hay en esta sucursal: \n')
                res.write('-----------------------------------------------\n\n')
                concesionaria.autos.forEach((auto) => {
                    // Aca le puedo pedir al auto cualquiera de sus propiedades
                    //res.write(auto);
                    res.write(`${auto.marca} ${auto.modelo} ${auto.anio} ${auto.color}\n\n`);
                })

                res.end('\nCantidad de autos disponibles: ' + concesionaria.autos.length);
            }
        })
        res.end('No tenemos sucursales ahí');
    }
}

module.exports = sucursalesController;
