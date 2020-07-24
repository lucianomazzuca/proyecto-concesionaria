const fs = require('fs');

let dbConcesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = dbConcesionaria;

// dbConcesionaria.forEach((concesionaria)=>{
//     concesionaria.autos.forEach((auto)=>{
//         // Aca le puedo pedir al auto cualquiera de sus propiedades
//         console.log(auto.marca)
//     })
// })

// Mostrar solo consecionarias

// dbConcesionaria.forEach((concesionaria)=>{
//     console.log(concesionaria.sucursal)
// })

// dbConcesionaria.forEach((concesionaria)=>{
//     for(let autos in concesionaria.auto){
//         // Aca le puedo pedir al auto cualquiera de sus propiedades
//         console.log(auto)
        
//     }
// })


// dbConcesionaria.forEach((concesionaria)=>{
//     concesionaria.autos.forEach((auto)=>{
//         // Aca le puedo pedir al auto cualquiera de sus propiedades
//         console.log(JSON.stringify(auto, null, 1)
//         )
//     })
// })


