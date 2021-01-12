
console.log("archivo callbacks")

setTimeout(() => {
    console.log("Hola 2 seg despues")
}, 2000)

console.log("despues del time out")

//construir una pared
//-construida
//-aplanada
//-pintada

const muro = {
    construido:false,
    aplanado: false,
    pintado: false,
}
//sintaxis por convencion de un callbacks
// convencion = acuerdo general 
// callback reciba siempre 2 parametros
// callback(error, data) 

function construir(muroAConstruir, callback) {// 1 seg
    console.log(`construyendo`)
    setTimeout(() => {
    muroAConstruir.construido = true

    let error = null
    if (muroAConstruir.construido === false) { //esto es igual a ---
        error = `No se pudo construir`
    }

    callback(error, muroAConstruir)
}, 1000)
}

function aplanar(muroAAplanar, callback) { // 2 seg
    setTimeout(() => {
    muroAAplanar.aplanado = true
    const error = muroAAplanar.aplanado ? null : `no se pudo aplanar` // --- esto 

    callback(error, muroAAplanar)
},2000)
}

function pintar(muroAPintar, callback){// 2 seg
    setTimeout(() => {
    muroAPintar.pintado = true
    const error = muroAPintar.pintado ? null : `no se pudo pintar`
    callback(error, muroAPintar)
}, 2000)
}


//const muroConstruido = construir(muro)
//const muroAplanado = aplanar(muroConstruido)
//const muroPintado = pintar(muroAplanado)


// construir(muro, (muroConstruido) => {
//     console.log(`muro construido:`, muroConstruido)
//     aplanar(muroConstruido, (muroAplanado) => {
//      console.log(`muroAplanado: `, muroAplanado)
//      pintar(muroAplanado, (muroPintado) => {
//          console.log(`muroPintado: `, muroPintado)
//      })
//     })   
// })


construir(muro, (errorDeConstruccion, muroConstruido) => {
    if (errorDeConstruccion) {
        console.error(`Error de construccion: `, errorDeConstruccion)
        return //puede romper funciones, se ocupara romper funciones, tambi´en es conocido como salida temprana
    }
    console.log(`Construido`)
    aplanar(muroConstruido, (errorDeAplanado, muroAplanado) => {
        if (errorDeAplanado) {
            console.error(`Error de Aplanado: `, errorDeAplanado)
            return
        }
        console.log(`Aplanado`)

        pintar(muroAplanado, (errorDePintado, muroPintado) => {
            if (errorDePintado) {
                console.error(`Error de Pintado: `, errorDePintado)
                return
            }
            console.log(`Pintado`)
            console.log(`Muro completo`, muroPintado)
        })
    })
})

//falsy : false, ``, null, undefined, 0
//truthy: true, `cadena con racter`, numeros positivos o negativos, {objetos}, [arreglos]