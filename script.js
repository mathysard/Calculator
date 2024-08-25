document.addEventListener("DOMContentLoaded", () => {
    const output = document.querySelector("#output");
    const buttons = document.querySelectorAll("#numbers");
    const equal = document.querySelector("#equal");
    const backspace = document.querySelector("#backspace");
    const clear = document.querySelector("#clear");
    const error = document.querySelector("#error")
    const closeError = document.querySelector("#closeError");
    let accumulateNumbers = "";
    const forKeyHandle = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "0": 0,
        "+": "+",
        "-": "-",
        "/": "/",
        "*": "*",
        "%": "%"
    };

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            accumulateNumbers += btn.getAttribute("actAs");
            output.textContent = accumulateNumbers;
        })
    })

    equal.onclick = () => {
        try {
            if(output.textContent !== "") {
                const calculation = eval(output.textContent);
                output.textContent = calculation;
                accumulateNumbers = "";
            }
        } catch(err) {
            error.style.display = "block";
        }
    }

    clear.onclick = () => {
        accumulateNumbers = "";
        output.textContent = accumulateNumbers;
    }

    backspace.onclick = () => {
        let outputLength = accumulateNumbers.length;
        if(outputLength <= 1 || outputLength > 1) {
            let modifiedLength = accumulateNumbers.slice(0, - 1);
            accumulateNumbers = modifiedLength;
            output.textContent = modifiedLength;
        }
    }

    closeError.onclick = () => {
        error.style.display = "none";
    }

    document.onkeydown = e => {
        for(const [originalKey, pushedKey] of Object.entries(forKeyHandle)) {
        switch(e.key) {
            case originalKey:
                accumulateNumbers += pushedKey;
                output.textContent = accumulateNumbers;
                break;
            }
        }

        switch(e.key) {
            case "Backspace":
                let outputLength = accumulateNumbers.length;
                if(outputLength <= 1 || outputLength > 1) {
                    let modifiedLength = accumulateNumbers.slice(0, - 1);
                    accumulateNumbers = modifiedLength;
                    output.textContent = modifiedLength;
                }
                break;
            case "=":
            case "Enter":
                try {
                    if(output.textContent !== "") {
                        const calculation = eval(output.textContent);
                        output.textContent = calculation;
                        accumulateNumbers = "";
                    }
                } catch(err) {
                    error.style.display = "block";
                }
            break;
        }
    }
})