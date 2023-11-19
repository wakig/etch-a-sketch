// add 'resize' button to body
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'Resize';
button.addEventListener('click', setGridSize);
body.appendChild(button);

// mode for switching between black and RGB
let mode = 'black';
const color_button = document.createElement('button');
color_button.textContent = 'Mode: Black';
color_button.addEventListener('click', toggleColor);
body.appendChild(color_button);

function toggleColor(e) {
    if (mode === 'black') {
        mode = 'rgb';
        e.currentTarget.textContent = 'Mode: RGB';
    }
    else {
        mode = 'black';
        e.currentTarget.textContent = 'Mode: Black';
    }
}

// create grid
const grid = document.createElement('div');
grid.className = 'flex-grid';
body.appendChild(grid);

// resize function
function resize(n) {
    // clear the grid
    const cols = document.querySelectorAll('.col');
    cols.forEach((col) => {
        col.remove();
    });

    // create nxn squares in grid
    for (let i=0; i<n; i++) {
        const col = document.createElement('div');
        col.className = 'col';
        for (let j=0; j<n; j++) {
            const square = document.createElement('div');
            square.className = 'row';
            // square.textContent = 'a';
            square.addEventListener('mouseover', () => {
                if (mode === 'black') {
                    square.style.backgroundColor = 'black';
                }
                else {
                    red = Math.floor(Math.random() * 256);
                    blue = Math.floor(Math.random() * 256);
                    green = Math.floor(Math.random() * 256);
                    square.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
                }
            });
            col.appendChild(square);
        }
        grid.appendChild(col);
    }
}

// prompt user for grid size
function setGridSize() {
    let n = 1;
    while (n < 2 || n > 100) n = prompt('Please enter grid size (minimum 2, max 100):');
    resize(n);
}

resize(16);