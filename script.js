const numDireccionesInput = document.getElementById("num_direcciones");
const btnAgregar = document.getElementById("btn_agregar");
const direccionesContainer = document.getElementById("direcciones_container");
const btnCalcular = document.getElementById("btn_calcular");
const resultadosDiv = document.getElementById("resultados");

btnAgregar.addEventListener("click", () => {
    const numDirecciones = numDireccionesInput.value;
    direccionesContainer.innerHTML = "";
    for (let i = 0; i < numDirecciones; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Código postal ${i + 1}`;
        input.classList.add("codigo_postal");
        direccionesContainer.appendChild(input);
    }
});

btnCalcular.addEventListener("click", () => {
    const codigosPostales = Array.from(document.querySelectorAll(".codigo_postal")).map(input => input.value);

    // Obtener los datos de la hoja de cálculo (reemplaza con la ruta real)
    fetch("hoja_kilom_pruebas.csv")
        .then(response => response.text())
        .then(csvData => {
            const data = procesarCSV(csvData);
            const resultado = calcularPresupuesto(codigosPostales, data);
            mostrarResultados(resultado);
        })
        .catch(error => {
            console.error("Error al leer la hoja de cálculo:", error);
            resultadosDiv.innerHTML = "<h2>Error al leer la hoja de cálculo.</h2>";
        });
});



function procesarCSV(csvData) {
  const lineas = csvData.split("\n");
  const data = {};
  for (let i = 1; i < lineas.length; i++) {
    const partes = lineas[i].split(";"); // Usar punto y coma como separador
    if (partes.length === 3) {
      const poblacion = partes[0].trim();
      const codigoPostal = partes[1].trim();
      const valor = parseFloat(partes[2].trim());
      data[codigoPostal] = { valor, Poblacion };
    }
  }
  return data;
}


function calcularPresupuesto(codigosPostales, data) {
    let total = 0;
    const resultado = [];
    for (const codigo of codigosPostales) {
        const item = data[codigo] || { valor: 0, poblacion: "" };
        total += item.valor;
        resultado.push({ codigo, valor: item.valor, poblacion: item.poblacion });
    }
    return { resultado, total };
}

function mostrarResultados(resultado) {
    let resultadoHtml = "<h2>Resultados:</h2>";
    resultado.resultado.forEach(item => {
        resultadoHtml += `<p>Código ${item.codigo}: ${item.poblacion} - Valor: ${item.valor}</p>`;
    });
    resultadoHtml += `<p>Total: ${resultado.total}</p>`;
    resultadosDiv.innerHTML = resultadoHtml;
}
