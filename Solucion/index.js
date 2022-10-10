
const boton = document.getElementById('boton_datos');

const boton_enviar = document.getElementById('boton_enviar')

const urlLista= `https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos?dataOwner=21fafec5-754f-4ee5-b668-acd472316765`;
const urlCrearElectrodomestico = 'https://electrics.azurewebsites.net/Electrodomestico/CrearElectrodomestico?dataOwner=21fafec5-754f-4ee5-b668-acd472316765'

const listaProductos =
       {
        nombre:'Televisor LG 77 pulgadas OLED 4K Ultra HD Smart TV',
        alto:'43 pulgadas',
        ancho:'43 pulgadas',
        largo:'43 pulgadas',
        descripcion:'Televisor LG 77 pulgadas OLED 4K Ultra HD Smart TV',
        precio:'1.699.000',
        idCategoria:'QLED',
        idMarca:'Samsung',
        modelo:'QN43Q65BAKXZL',
        tiempoGarantia:'12 meses',
        unidadesDisponibles:19
       };



const listaProductos2 ={
        nombre:'Televisor LG 77 pulgadas OLED 4K Ultra HD Smart TV',
        alto:43,
        ancho:43,
        largo:43,
        descripcion:'Televisor LG 77 pulgadas OLED 4K Ultra HD Smart TV',
        precio:1699000,
        idCategoria:'QLED',
        idMarca:199,
        modelo:'QN43Q65BAKXZL',
        tiempoGarantia:1,
        unidadesDisponibles:19
    };



boton.addEventListener('click',()=>{

    //Llamada
    fetch(urlLista)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(er=> console.log(er));

});

fetch(urlCrearElectrodomestico,
    {
        method:'POST',
        body:JSON.stringify(listaProductos2),
        headers:{'Content-type':'application/json'}
    })
    .then(res=>res.json())
    .then(data=>console.log(data))