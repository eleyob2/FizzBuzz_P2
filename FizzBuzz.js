const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("num_input");
    const num = Number(input.value);

    if (input.value.trim() === "" || isNaN(num)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let output;

    if (num % 3 === 0 && num % 5 === 0) {
        output = "FizzBuzz";
    } else if (num % 3 === 0) {
        output = "Fizz";
    } else if (num % 5 === 0) {
        output = "Buzz";
    } else {
        output = String(num);
    }

    result.textContent = output;
});
