//punto 1

for(let i=10; i >= 1; i--){
    console.log("Mensaje del for", i)
}

const par = (numero) => {
    if (typeof numero !== "number")
      return console.log("Debes ingresar un numero");
  
    if (numero % 2 === 0) {
      return console.log(`El numero ${numero} es Par`);
    }
  
    if (numero % 2 !== 0) {
      return console.log(`El numero ${numero} es Impar`);
    }
  };
  
  par(10);
  par(9);
  par(8);
  par(7);
  par(6);
  par(5);
  par(4);
  par(3);
  par(2);
  par(1);

  console.log("----operacion")

  //punto 2

  let opcion, num1,num2, resultado;
  opcion="Suma"
  num1=1;
  num2=2;
  num3=3;
  num4=4;
  num5=5;
  
  switch (opcion) {
      case "Suma":
          console.log("Escogiste la suma: ", resultado)
          resultado=num1+num2+num3+num4+num5
          break;
  }