
const urlListaElectrodomesticos= `https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos?dataOwner=21fafec5-754f-4ee5-b668-acd472316765`;


const lista = [
    {
    nombre:'Televisor Samsung 43 pulgadas QLED 4K Ultra HD Smart TV',
    garantia:'1 año',
    modelo:'QN43Q65BAKXZL',
    tecnologia:'QLED',
    dimensiones:'43 pulgadas'},
    {
        nombre:'Televisor Samsung 43 pulgadas QLED 4K Ultra HD Smart TV',
        garantia:'1 año',
        modelo:'QN43Q65BAKXZL',
        tecnologia:'QLED',
        dimensiones:'43 pulgadas'}
    ];
    
    fetch(urlListaElectrodomesticos, {
        method: "POST",
        body: JSON.stringify(lista),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));



    
    fetch(urlListaElectrodomesticos)
    .then(res => console.log(res.data))
    .catch(er=> console.log(er));