let dispositivo = {
    nombre:"gateway",
    nSerie:123456,
    valor:1500,
    direccionIpv4:[192,168,10,5],
    estado:false,
    cambiarEstado: function(){
        this.estado=!this.estado,
        console.log(`Estado Cambio: ${this.estado}`)
    }
}

dispositivo.valor=2500
console.log(dispositivo)

dispositivo.cambiarEstado()
console.log(dispositivo.estado)

// Extraer Info de un objeto  
let numSerie = dispositivo.nSerie
let nombreDispositivo = dispositivo.nombre

console.log(numSerie,nombreDispositivo)

// Destructuracion abajo otro metodo para hacer lo de arriba

let {nSerie,nombre}=dispositivo

console.log(nSerie,nombre)

let Equipo = {
    nombre: "Barcelona",
    golesaFavor: 1,
    golesenContra: 3   //golesenContra: undefined
    // poder poner undefined o null para variables numericas 
    // de ahi le podes asignar un valor por defecto en linea 43
}
// Levi lo hizo asi
let golesLocal = Equipo.golesaFavor
let golesVisitante = Equipo.golesenContra
console.log(golesLocal,golesVisitante)
//Salvador y guillermo
let {golesaFavor,golesenContra}=Equipo    // golesenContra=2
console.log(golesaFavor,golesenContra)

let loteria = [32,69,47,69]

console.log(loteria)
// destructuracion con arreglos
let[,,ganador]=loteria
console.log(ganador)
