// js for the calculator
// javascript is like the logic of a webapp

// begin file

// begin area
// this area gets the display, and the buttons.
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
// end area

// begin area
// this area saves the current expression as a string and updates it as the user clicks buttons. 
// it also checks if the user clicks the equals button, and if so, it evaluates the expression and updates the display. 
// if the user clicks the clear button, it clears the expression and the display.
let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                currentInput = eval(currentInput);
                // avoid eval in real apps, because it runs the argument as code, so someone could input malicious code
                // the field in here is readonly so we'd be fine here 
                // still, avoid eval in real apps.
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }
        } 
        else if (value === "C") {
            currentInput = "";
            display.value = "";
            // === is a strict equality operator, it checks for both value and type 
            // it won't do type coercion like == does. 
            // in this case, it's not really necessary to use ===, but it's a good practice to use it anyway.
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
// end area
// end file
