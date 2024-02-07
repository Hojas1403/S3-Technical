document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = [
        "clear", "delete", "decimal", "divide",
        "seven", "eight", "nine", "multiply",
        "four", "five", "six", "subtract",
        "one", "two", "three", "add",
        "double-zero", "zero", "equals"
    ];

    buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (buttonId === "equals") {
            button.addEventListener("click", function() {
                display.value = eval(display.value);
            });
        } else if (buttonId === "clear") {
            button.addEventListener("click", function() {
                display.value = "";
            });
        } else if (buttonId === "delete") {
            button.addEventListener("click", function() {
                display.value = display.value.toString().slice(0, -1);
            });
        } else if (buttonId === "decimal") {
            button.addEventListener("click", function() {
                updateDisplay(".");
            });
        } else {
            button.addEventListener("click", function() {
                updateDisplay(button.value);
            });
        }
    });

    function updateDisplay(value) {
        display.value += value;
    }
});
