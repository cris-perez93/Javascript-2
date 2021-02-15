
 //exercici1

let nombre=["c","r","i","s","t","i","a","n"]

 function ex1(){

    for (let i = 0; i<nombre.length; i++){

    console.log(nombre[i]);

    mostrarResultado(nombre.join(""));
    }
}
    const mostrarResultado =(resultado, anadir=false) =>{  // nos servira para todos 
    let divResultado =document.getElementById('resultado')
            
    if (anadir){
         divResultado.innerHTML += resultado;
        }
     else {
             divResultado.innerHTML=resultado;
        }
    }
    
//ex 2

function ex2(){
     //limpiar contenido de div
    mostrarResultado('')
    nombre.map((letra) => {

         let tipoLetra = letra.match(/[aeiou]/i)
            ? 'VOCAL'
            : 'CONSONANT';
         let mensaje = `He trobat la ${tipoLetra}: ${letra}`
         let span = `<p>${mensaje}</p>`

        mostrarResultado(span, true);
        console.log(mensaje);
    })
}
    
//ex3

function ex3(){

   var mapa = new Map()

   for (let i = 0; i<nombre.length; i++){

     let letraActual =nombre[i] //
                            
     if(mapa.get(letraActual)===undefined){
     mapa.set(letraActual,1) // tendran +1 por defecto
     }

      else{

    let valor= mapa.get(letraActual)  
    mapa.set(letraActual, valor + 1) //si se repite = +1

    }
    }

// construir mensaje
    let mensaje = ''
    mapa.forEach( (v, k) => {
        console.log(v)
        mensaje += `<p>La letra <strong>${k}</strong> se repite ${v} vez/veces</p>`;
        });
   
     console.log([...mapa.set()])
     mostrarResultado(mensaje);
}

 //exercici 4
 function ex4(){
    let apellido=["p","e","r","e","z"]
    apellido.unshift(" ")

    let fullName = nombre.concat(apellido).join("");
        console.log(fullName);
        mostrarResultado(fullName);

    }
    

//ex 5

 var text = `Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email`;
        
 function ex5(){
    var foundEmails =[]
    var emailRegex = /[a-zA-Z0-9._-]+@\w+\.es/g;
    
     while (match=emailRegex.exec(text)){
            foundEmails.push(match[0]);
        }
        
        console.log(foundEmails);
        mostrarResultado(foundEmails);
        }