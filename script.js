document.addEventListener("DOMContentLoaded", () => {
    const output = document.querySelector("#output");
    const buttons = document.querySelectorAll("#numbers");
    const equal = document.querySelector("#equal");
    const backspace = document.querySelector("#backspace");
    const clear = document.querySelector("#clear");
    let accumulateNumbers = "";

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            if(btn.getAttribute("operator")) {
                accumulateNumbers += " " + btn.getAttribute("actAs") + " ";
            } else {
                accumulateNumbers += btn.getAttribute("actAs");
            }
            output.textContent = accumulateNumbers;
        })
    })

    equal.onclick = () => {
        if(output.textContent !== "") {
            const calculation = eval(output.textContent);
            output.textContent = calculation;
            accumulateNumbers = "";
        }
    }

    clear.onclick = () => {
        accumulateNumbers = "";
        output.textContent = accumulateNumbers;
    }

    backspace.onclick = () => {
        let outputLength = accumulateNumbers.length;
        if(outputLength <= 2 || outputLength > 2) {
            const modifiedLength = accumulateNumbers.substring(0, accumulateNumbers.length - 2);
            output.textContent = modifiedLength;
        }
    }
})