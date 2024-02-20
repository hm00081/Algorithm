function fibonacci(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let i = 1; i < 10; i++) {
    console.log(fibonacci(i));
}
