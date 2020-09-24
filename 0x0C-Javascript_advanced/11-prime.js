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
let time = 0
setTimeout(() => console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds.`), time);
let before = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
let after = performance.now();
time = after - before;
