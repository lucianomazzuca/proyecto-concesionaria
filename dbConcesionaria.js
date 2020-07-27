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



// let arrayFiltrado = [''];

// dbConcesionaria.forEach(concesionaria => {
//     concesionaria.autos.forEach(auto => {
//         for(let i = 0; i < arrayFiltrado.length; i++){
//             console.log('hola')
//             if(auto.marca == arrayFiltrado[i]){
//                 console.log(auto.marca)
//                 break;
//             }
//             else if(auto.marca != arrayFiltrado[arrayFiltrado.length]){
//                 console.log('')
//                 arrayFiltrado.push(auto.marca);
//             }
//         }

//     })
// })


// console.log(arrayFiltrado.length)


// let arrayFiltrado = [];
// let arrayMarcas = [];

// dbConcesionaria.forEach(concesionaria => {
//     concesionaria.autos.forEach(auto => {
//         arrayMarcas.push(auto.marca)
//     })
// })

// console.log(arrayMarcas)

// arrayMarcas.forEach(marca => {
//     if(arrayFiltrado.indexOf(marca) == -1){
//         arrayFiltrado.push(marca);
//     }
// } )

// console.log(arrayFiltrado)
