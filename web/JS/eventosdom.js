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
const colorSelect = document.getElementById("colorSelect");
const addColorBtn = document.getElementById("btn-add-color");
const removeColorBtn = document.getElementById("btn-rmv-color");

addColorBtn.addEventListener("click", function() {
  const newColor = document.createElement("option");
  newColor.text = getRandomColor();
  colorSelect.add(newColor);
});

removeColor

//Ejercicio 6
//
const imagenGato = document.getElementById("imagenGato");

imagenGato.addEventListener("mouseenter", () => {
  const minWidth = 300;
  const maxWidth = 600;
  const width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
  const height = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
  const newSrc = `http://placekitten.com/${width}/${height}`;
  imagenGato.src = newSrc;
});
