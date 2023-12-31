const body = document.querySelector('body');

// mode for switching between black and RGB
let mode = 'black';
const color_button = document.createElement('button');
color_button.textContent = 'Paint: Black';
color_button.addEventListener('click', toggleColor);
body.appendChild(color_button);

// add 'resize' button to body
const button = document.createElement('button');
button.textContent = 'Resize';
button.addEventListener('click', setGridSize);
body.appendChild(button);

function toggleColor(e) {
    if (mode === 'black') {
        mode = 'rgb';
        e.currentTarget.textContent = 'Paint: RGB';
    }
    else {
        mode = 'black';
        e.currentTarget.textContent = 'Paint: Black';
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
            let opacity = 0.0;
            square.addEventListener('mouseover', () => {
                if (mode === 'black') {
                    opacity = Math.min(opacity + 0.1, 1.0);
                    square.style.backgroundColor = `rgba(0,0,0,${opacity})`;
                }
                else {
                    red = Math.floor(Math.random() * 256);
                    blue = Math.floor(Math.random() * 256);
                    green = Math.floor(Math.random() * 256);
                    square.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
                    opacity = 0.0;
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