

let datoDelStorage = localStorage.getItem ("listaProduc")
let jsonObjeto= JSON.parse (datoDelStorage)

let queBuscas = prompt ("Que producto buscas?")

let producto = jsonObjeto.find (obj => obj.producto === queBuscas)

console.log(producto);