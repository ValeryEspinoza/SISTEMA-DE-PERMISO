
//Inputs
const inputNombre = document.getElementById("nombre")
const inputID = document.getElementById("id")
const inputSede = document.getElementById("sede")
const inputLaptopCode = document.getElementById("laptopCode")
const inputFechaS = document.getElementById("fechaS")
const inputFechaR = document.getElementById("fechaR")
const checkTerminos = document.getElementById("terminos")


//Botones
const btnAplicar = document.getElementById("aplicar")
const selectAcceso = document.getElementById("acceso")

//contenedores
const divPrincipal = document.getElementById("contenedorPrincipal")
const contenedorFondoSolicitudes = document.getElementById("contenedorFondoSolicitudes")








    
//Imports
import { sendRecuest } from "../server/PostRecuest"
import { GetRecuest } from "../server/GetRecuest"


btnAplicar.addEventListener("click", function () {
    
    let men = document.getElementById("men")
    
    if (checkTerminos.checked === true) {
        let pendiente = "Pendiente"
        sendRecuest(inputNombre.value, inputID.value, inputSede.value, inputLaptopCode.value,
        inputFechaS.value, inputFechaR.value, pendiente)      

    }else{
        let modal= document.createElement("h5")
        modal.innerHTML="¡Falta Marcar Terminos Y Condiciones!"
        men.appendChild(modal)
    
    }

   // comentado para continuar programando
    /*if (selectAcceso.value == "Colaborador") {
        let modal2= document.createElement("p")
        modal2.innerHTML="¡Solicitud Realizada con exito! Pronto se enviará respuesta a su solicitud"
        men.appendChild(modal2)
    }

    if (selectAcceso.value == "Acceso" || selectAcceso.value == "") {
        let modal3= document.createElement("p")
        modal3.innerHTML="Debe Ingresar un tipo de acceso"
        men.appendChild(modal3)
    }*/
})




//Cuando el post de nuevos item este actualizada, agregar esto a btnguardar
if (selectAcceso.value == "Administrador") {  
    console.log("Si puede usar Funciones Administrador");

    async function traerSolicitudes() {
        let solicitudes = await GetRecuest()

         let tituloSolicitud = document.createElement("h3")
         tituloSolicitud.innerHTML="Solicitudes Pendientes"
         divPrincipal.appendChild(tituloSolicitud)

         for (let index = 0; index < solicitudes.length; index++) {
                 //Get Nombre
                 let contenedorSolicitud= document.createElement("div")
                 let etiquetaNombre= document.createElement("h3")
                 etiquetaNombre.innerHTML=solicitudes[index].nombre
                 contenedorSolicitud.appendChild(etiquetaNombre)
                 divPrincipal.appendChild(contenedorSolicitud) 
     
                //Get Fecha
                 let sumaFechaS="Fecha Salida:"+ " " + solicitudes[index].fechaSalida + " "
                 let datoFechaS= sumaFechaS
                 let etiquetaFechaS= document.createElement("p")
                 etiquetaFechaS.innerHTML=datoFechaS
                 contenedorSolicitud.appendChild(etiquetaFechaS)
     
                 let fechaR= "Fecha Regreso:"+ " "+ solicitudes[index].fechaRegreso
                 let datoFechaR= fechaR
                 let etiquetaFechaR= document.createElement("p")
                 etiquetaFechaR.innerHTML=datoFechaR
                 contenedorSolicitud.appendChild(etiquetaFechaR)
     
                 //Get LaptopCode
                 let etiquetaCode= document.createElement("p")
                 etiquetaCode.innerHTML="Codigo de Computadora:" + " "+ solicitudes[index].laptopCode
                 contenedorSolicitud.appendChild(etiquetaCode)
                 
     
                 //Get Status
                 let etiquetaStatus= document.createElement("h6")
                 etiquetaStatus.innerHTML=solicitudes[index].estatus
                 contenedorSolicitud.appendChild(etiquetaStatus)
       
                 //boton Aceptar
                 let btnAceptar = document.createElement("button")
                 btnAceptar.innerHTML= "Aceptar"
                 contenedorSolicitud.appendChild(btnAceptar)
     
                 //Boton Rechazar
                 let btnRechazar = document.createElement("button")
                 btnRechazar.innerHTML= "Declinar"
                 contenedorSolicitud.appendChild(btnRechazar)
     
         } 
      }
     
      traerSolicitudes()

} 


btnAceptar.addEventListener("click", function () {
    
})
   
