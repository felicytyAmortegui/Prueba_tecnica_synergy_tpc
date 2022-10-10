
const boton = document.getElementById('boton_datos');

const boton_enviar = document.getElementById('boton_enviar')

const urlLista= `https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos?dataOwner=21fafec5-754f-4ee5-b668-acd472316765`;

const listaProductos = [
    {
     nombre:'Televisor Samsung 43 pulgadas QLED 4K Ultra HD Smart TV',
     caracteristicas:{
        dimensiones:'43 pulgadas',
        tecnologia:'QLED',
        modelo:'QN43Q65BAKXZL',
        refresh:'60Hz',
        garantia:'12 meses' 
     }   
    },

    {
        nombre:'Televisor Samsung 43 pulgadas QLED 4K Ultra HD Smart TV',
        caracteristicas:{
           dimensiones:'43 pulgadas',
           tecnologia:'QLED',
           modelo:'QN43Q65BAKXZL',
           refresh:'60Hz',
           garantia:'12 meses' 
        }   
       }
]

boton.addEventListener('click',()=>{

    //Llamada
    fetch(urlLista)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(er=> console.log(er));

});

boton_enviar.addEventListener('click',()=>{


    fetch(urlLista,
        {
            method:'POST',
            body:JSON.stringify(listaProductos),
            headers:{'Content-type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=>console.log(data))


    })
