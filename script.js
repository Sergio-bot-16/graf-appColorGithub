// Referencias
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");

const valRojo = document.getElementById("valRojo");
const valVerde = document.getElementById("valVerde");
const valAzul = document.getElementById("valAzul");

const preview = document.getElementById("preview");
const hexCode = document.getElementById("hexCode");

// Función para actualizar color
function actualizarColor() {
  const r = parseInt(rojo.value);
  const g = parseInt(verde.value);
  const b = parseInt(azul.value);

  // Mostrar valores
  valRojo.textContent = r;
  valVerde.textContent = g;
  valAzul.textContent = b;

  // Color RGB
  const rgb = `rgb(${r}, ${g}, ${b})`;
  preview.style.backgroundColor = rgb;

  // Convertir a HEX
  const hex = "#" + 
    r.toString(16).padStart(2, "0") + 
    g.toString(16).padStart(2, "0") + 
    b.toString(16).padStart(2, "0");

  hexCode.textContent = hex.toUpperCase();
}

// Escuchar cambios en los sliders
[rojo, verde, azul].forEach(input => {
  input.addEventListener("input", actualizarColor);
});

// Inicializar
actualizarColor();
