// Fibonacci
function calcularFibonacci() {
  let n = parseInt(document.getElementById("fibInput").value);
  let resultado = document.getElementById("fibResultado");

  if (isNaN(n) || n <= 0) {
    resultado.innerHTML = "Ingrese un número válido.";
    return;
  }

  let a = 1;
  let b = 1;
  let secuencia = [];

  for (let i = 0; i < n; i++) {
    secuencia.push(a);

    let temp = a + b;
    a = b;
    b = temp;
  }
  resultado.innerHTML = `
    <strong>Secuencia:</strong><br>
    ${secuencia.join(", ")}
  `;
}

// Número Primo
function verificarPrimo() {
  let numero = parseInt(document.getElementById("primoInput").value);
  let resultado = document.getElementById("primoResultado");

  if (isNaN(numero) || numero <= 0) {
    resultado.innerHTML = "Ingrese un número válido.";
    return;
  }

  let divisores = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores++;
    }
  }
  if (divisores === 2) {
    resultado.innerHTML = `${numero} es un número primo.`;
  } else {
    resultado.innerHTML = `${numero} no es un número primo.`;
  }
}
