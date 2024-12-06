const numberContainer = document.getElementById('number-container');

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 0; i <= 101; i++) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = i;

    if (isPrime(i)) {
        numberElement.classList.add('prime');
    } else if (i % 2 === 0) {
        numberElement.classList.add('even');
    } else {
        numberElement.classList.add('odd');
    }

    numberContainer.appendChild(numberElement);
}
