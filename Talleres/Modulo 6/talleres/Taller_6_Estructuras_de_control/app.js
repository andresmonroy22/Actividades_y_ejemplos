//punto 1

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
  
  par(1);
  par(2);
  par(3);
  par(4);
  par(5);
  par(6);
  par(7);
  par(8);
  par(9);
  par(10);

  console.log("------- operacion")
//punto 2

let opcion, num1,num2, num3, resultado;
opcion=""
num1=10;
num2=5;
num3=1;

switch (opcion) {
    case "20%":
        console.log("compras mayores a 10 docenas")
        resultado=num1>600.000
        break;
    case "15%":
        console.log("compras mayores o iguales a 5 docenas")
        resultado=num1>=60.000
        break;
    case "10%":
        console.log("compras mayores a 1 docena")
        resultado=num1>60.000
        break

}
console.log(resultado)
