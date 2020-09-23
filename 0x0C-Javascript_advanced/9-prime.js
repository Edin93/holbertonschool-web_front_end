function countPrimeNumbers() {
    let n = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j <= parseInt(i / 2) + 1; j++) {
            if (i % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            n += 1;
        }
    }
    return n + 1;
}

let before = performance.now();
countPrimeNumbers();
let after = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${after - before} milliseconds.`)
