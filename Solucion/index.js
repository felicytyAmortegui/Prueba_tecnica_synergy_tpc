const llamada = async (url)=>{

    const i = await fetch(url)
    .then(res => res)
    .catch(er=>er);

    return i
}

const uerele= `https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos`;


console.log(llamada(uerele)); 