const fs = require('fs');

let dbConcesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = dbConcesionaria;

// dbConcesionaria.forEach((concesionaria)=>{
//     concesionaria.autos.forEach((auto)=>{
//         // Aca le puedo pedir al auto cualquiera de sus propiedades
//         console.log(auto)
//     })
// })

// Mostrar solo consecionarias

dbConcesionaria.forEach((concesionaria)=>{
    console.log(concesionaria.sucursal)
})
