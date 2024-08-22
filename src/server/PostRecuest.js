//envio de solicitud a endpoint 3004
async function sendRecuest (nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso, estatus) {


    try { 
      const newRecuest ={
        nombre,
        cedula, 
        sede, 
        laptopCode, 
        fechaSalida, 
        fechaRegreso,
        estatus
      }
  
      const response = await fetch(`http://localhost:3003/users`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(newRecuest) 
      
  });
  console.log("Solicitud Aplicada");
  
  const datos = await response.json();
  return datos
   
    } catch (error) {
      console.error(error);
    }
  }
  
      export{sendRecuest}


      
  
   