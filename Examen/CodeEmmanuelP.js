var notas = [53, 56, 18, 87, 100, 101]; //Arreglo

const notasOrdenadas = bubbleSort(notas); //Declarar constante, llamar funcion

console.log(notasOrdenadas);

function bubbleSort(array) { // parametro.
  const length = array.length; 
  
  let swapped;
  for (let i = 0; i < length; i++) {
    swapped = false; //Si no se ha realizado ningún intercambio
    
    for (let j = 0; j < length - i - 1; j++) { //reduce el número de elementos a comparar
      if (array[j] > array[j + 1]) { //es mayor que el siguiente elemento
        const temp = array[j];
        array[j] = array[j + 1]; 
        array[j + 1] = temp;
        swapped = true; //se ha realizado al menos un intercambio
      }
    }
    
    if (!swapped) {
      break;           //para salir del bucle exterior.
    }
  }
  
  return array;
}