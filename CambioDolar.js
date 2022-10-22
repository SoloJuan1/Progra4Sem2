// node CambioDolar.js --cantidad=1000 --tasa=24.78 --tipo=false
/*
false -> de lps a dolares
true -> de dolares a lps
console.log(valorResultante)
*/
let[,,pm1,pm2,pm3]=process.argv

const [,cantidad] = pm1.split('=')
const [,tasa] = pm2.split('=')
let [,tipo] = pm3.split('=')

//if(tipo==true){}
//If TERNARIO               true               falsa
tipo= (tipo==="true")   // como estaba en string aqui lo pasamos a booleano
let valorResultante= tipo?cantidad*tasa : cantidad/tasa

console.log(`El cambio es: ${valorResultante} ${tipo?'lps: ':'$'}`)