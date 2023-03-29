// ACtividad DOM y chatGPT 


//Ejercicio 1 
//
const mousePosition = document.getElementById("mousePosition");

document.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  mousePosition.innerHTML = `Posición del mouse: (${x}, ${y})`;
});

// Ejercicio 2
//
const form = document.getElementById("form1");
const fullNameContainer = document.createElement("div");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const firstName = document.getElementById("form-fname").value;
  const lastName = document.getElementById("form-lname").value;
  const fullName = document.createTextNode(`${firstName} ${lastName}`);
  fullNameContainer.appendChild(fullName);
  form.insertAdjacentElement("afterend", fullNameContainer);
});

//Ejercicio 3
//
const sampleTable = document.getElementById("sampleTable");
const insertRowBtn = document.getElementById("btn-insert-r");
const insertColBtn = document.getElementById("btn-insert-c");

insertRowBtn.addEventListener("click", function() {
  const newRow = sampleTable.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = "New row cell 1";
  cell2.innerHTML = "New row cell 2";
});

insertColBtn.addEventListener("click", function() {
  const rows = sampleTable.rows;
  for (let i = 0; i < rows.length; i++) {
    const newCell = rows[i].insertCell(-1);
    newCell.innerHTML = `New column cell ${i+1}`;
  }
});


//Ejercicio 4
//
const myTable = document.getElementById("myTable");
const rowIndexInput = document.getElementById("rowIndex");
const colIndexInput = document.getElementById("colIndex");
const newValueInput = document.getElementById("newValue");
const changeBtn = document.getElementById("btn-change");

changeBtn.addEventListener("click", function() {
  const rowIndex = Number(rowIndexInput.value) - 1;
  const colIndex = Number(colIndexInput.value) - 1;
  const newValue = newValueInput.value;
  if (rowIndex >= 0 && colIndex >= 0 && rowIndex < myTable.rows.length && colIndex < myTable.rows[0].cells.length) {
    myTable.rows[rowIndex].cells[colIndex].innerHTML = newValue;
  } else {
    alert("Posición inválida");
  }
});

//Ejercicio 5
//
// Obtener referencias a los elementos del DOM
const colorSelect = document.getElementById('colorSelect');
const btnAddColor = document.getElementById('btn-add-color');
const btnRmvColor = document.getElementById('btn-rmv-color');

// Función para agregar un color a la lista de opciones
function addColor() {
  // Crear un nuevo elemento de opción
  const newOption = document.createElement('option');
  // Generar un color aleatorio
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  // Establecer el valor y el texto del nuevo elemento de opción
  newOption.value = randomColor;
  newOption.textContent = randomColor;
  // Agregar el nuevo elemento de opción a la lista de opciones
  colorSelect.appendChild(newOption);
}

// Función para eliminar el último color de la lista de opciones
function removeColor() {
  // Obtener la cantidad de opciones en la lista
  const optionCount = colorSelect.options.length;
  // Si hay al menos dos opciones, eliminar la última opción
  if (optionCount >= 2) {
    colorSelect.removeChild(colorSelect.options[optionCount - 1]);
  }
}

// Agregar controladores de eventos a los botones
btnAddColor.addEventListener('click', addColor);
btnRmvColor.addEventListener('click', removeColor);

//Ejercicio 6 
// 
document.getElementById("imagenGato").addEventListener('mouseenter', function () {
  const width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  this.src = `http://placekitten.com/${width}/${height}`;
});
