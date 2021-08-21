

 class datos {
    constructor (producto , precio ) {

       this.producto = producto ;
       this.precio = precio;
       
   }


  costoFinal (precio , envio) {
     
     let cantidad = Number (prompt ("Ingresa la cantidad que queres"));
     
     let costo = this.precio * cantidad + envio ;
      console.log(`el costo final es de ${costo}`)

 }

}





//Constante

const listaProd = [];


const producto1 = new datos ("cafe", 1300)
const producto2 = new datos ("miel", 2300)
const producto3 = new datos ("prensa francesa", 3300)
const producto4 = new datos ("combo cafe", 6000)
const producto5 = new datos ("taza de cafe", 600)
const producto6 = new datos ("box 1", 10300)
const producto7 = new datos ("box 2", 7300)
const producto8 = new datos ("box 3", 4300)
const producto9 = new datos ("box 4", 6300)





listaProd.push (producto1)
listaProd.push (producto2)
listaProd.push (producto3)
listaProd.push (producto4)
listaProd.push (producto5)
listaProd.push (producto6)
listaProd.push (producto7)
listaProd.push (producto8)
listaProd.push (producto9)


//let prod = prompt ("Introduci el producto que deseas")


//const buscar = listaProd.find (element => element.producto== prod)


let datoParseado = JSON.stringify (listaProd )
console.log(datoParseado);


localStorage.setItem("listaProduc",datoParseado )

let selector1 = document.getElementById ("DOM")

listaProd.forEach (e => {


let div1 = document.createElement ("div")

let p1 = document.createElement ("p")
p1.textContent = e.producto 

let p2 = document.createElement ("p")
p2.textContent = e.precio



div1.appendChild (p1)
div1.appendChild (p2)

selector1.appendChild (div1)

})