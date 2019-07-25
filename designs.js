// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Get value of height and width from input
  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('#inputWidth').value;

  // Draw Grid
  const grid = document.querySelector('#pixelCanvas');
  for (var j = 0; j < height; j++) {
    const row = document.createElement('tr');
    for (var i = 0; i < width; i++) {
      const column = document.createElement('td');
      row.appendChild(column);
      // Fill grid with selected color
      column.addEventListener('click', function(event) {
        column.style.backgroundColor = document.querySelector('#colorPicker').value;
      });
    }
    grid.appendChild(row);
  }
}
// Handle form submit
const form = document.querySelector('#sizePicker');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  clearGrid();
  makeGrid();
});

// Clear grid before making a new one
function clearGrid() {
  document.querySelector('#pixelCanvas').innerHTML = "";
}
