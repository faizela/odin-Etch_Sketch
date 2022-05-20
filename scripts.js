const container = document.querySelector('#container');

const squareContainer = document.createElement('div');
squareContainer.classList.add('squareContainer');
container.appendChild(squareContainer);

for(let i = 1; i <=16; i++){
    let squarediv = document.createElement('div')
    squarediv.classList.add('squarediv')
    squareContainer.appendChild(squarediv)
}




