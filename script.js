function calculate() {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let option = document.getElementById("operation").value;

    let text = "";

    if (isNaN(n1) || isNaN(n2)) {
        text = "Please enter valid numbers";
    }
    else {

        if (option === "+") {
            text = "Addition = " + (n1 + n2);
        }

        else if (option === "-") {
            text = "Subtraction = " + (n1 - n2);
        }

        else if (option === "*") {
            text = "Multiplication = " + (n1 * n2);
        }

        else if (option === "/") {

            if (n2 === 0) {
                text = "Cannot divide by zero";
            }
            else {
                text = "Division = " + (n1 / n2);
            }
        }
    }

    document.getElementById("result").innerText = text;
}

function clearAll() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result:";
}