// Practica:
// Objetivo: Plasmar en funciones y callbacks el oroces de aplicación de kodemia
// 1.- Entrevista
// 2.- Oferta
// 3.- Inscripción
// 4.- Asistir a clase
//
// Materia prima: El Koder
// - entrevistado
// - Ofertado
// - inscrito
// - enClase

const koder = {
    entrevistado: false,
    ofertado: false,
    inscrito: false,
    enClases: false,
}

function entrevistar(koderAEntrevistar, callback) {
    console.log(`entrevistando...`)
    setTimeout(() => {
        koderAEntrevistar.entrevistado = true //

        const error = koderAEntrevistar.entrevistado ? null : `El koder no se pudo entrevistar `

        callback(error, koderAEntrevistar)
    }, 1500)
}

function ofertar(koderAOfertar, callback) {
    console.log(`ofertando... `)
    setTimeout(() => {
        koderAOfertar.ofertado = true //

        const error = koderAOfertar.ofertado ? null : `El koder no sigui con su ofertar `

        callback(error, koderAOfertar)
    }, 2000)
}

function inscribir(koderAInscribir, callback) {
    console.log(`inscribiendo... `)
    setTimeout(() => {
        koderAInscribir.inscrito = true //

        const error = koderAInscribir.inscrito ? null : `El koder no se pudo Inscribir `

        callback(error, koderAInscribir)
    }, 2000)
}

function clases(koderEnClases, callback) {
    console.log(`en clases... `)
    setTimeout(() => {
        koderEnClases.enClases = true //

        const error = koderEnClases.enClases ? null : `El koder no asiste a clases `

        callback(error, koderEnClases)
    }, 2000)
}

entrevistar(koder, (errorEntrevista, koderEntrevistado) => {
    if (errorEntrevista) {
        console.error(`El koder no se entrevisto: `, errorEntrevista)
        return
    }
    console.log(`Koder Entrevistado: `)
    ofertar(koderEntrevistado, (errorDeOfertado, koderOfertado) => {
        if (errorDeOfertado) {
            console.error(`Error de Ofertado: `, errorDeOfertado)
            return
        }
        console.log(`Koder Ofertado: `)
        inscribir(koderOfertado, (errorDeInscripcion, koderInscrito) => {
            if (errorDeInscripcion) {
                console.error(`Error de Inscripcion: `, errorDeInscripcion)
                return
            }
            console.log(`Koder Inscrito: `)
            clases(koderInscrito, (errorDeClases, koderEnClases) => {
                if (errorDeClases) {
                    console.error(`El koder no esta en clases: `, errorDeClases)
                    return
                }
                console.log(`Koder tomando clases, exito!...`)
                console.log(`pasos completados: `, koderEnClases)
            })
        })
    })
})