function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function calculateSumAndPrimes() {
    const inputA = parseInt(document.getElementById("inputA").value);
    const inputB = parseInt(document.getElementById("inputB").value);

    let sum = 0;
    let primeNumbers = [];

    for (let num = inputA; num <= inputB; num++) {
        if (isPrime(num)) {
            primeNumbers.push(num);
            sum += num;
        }
    }

    const resultText = `Tổng của a và b: ${sum}, Các số nguyên tố trong khoảng ${inputA} đến ${inputB}: ${primeNumbers.join(', ')}`;
    document.getElementById("result").textContent = resultText;
}

    
