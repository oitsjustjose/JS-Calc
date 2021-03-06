/**
 * @author oitsjustjose | https://github.com/oitsjustjose | oitsjustjose.com
 * Handles all things in regards to the calculator functionality
 */

let display = document.querySelector("input.view");
let justEvaled = false;
const validOpts = Array()

const isNumeric = (val) => {
    return !isNaN(parseInt(val));
};

const evaluate = () => {
    if (display.value == "err") {
        return "err";
    }

    let ret;

    try {
        ret = eval(display.value);
    } catch (ex) {
        ret = "err";
    }

    justEvaled = true;
    return ret;
};

const init = () => {
    document.querySelectorAll(".buttons tr td").forEach((el) => {
        el.addEventListener("click", () => {
            if (el.innerText == "AC") {
                display.value = "";
            } else if (el.innerText == "=") {
                display.value = evaluate();
            } else {
                if (justEvaled && isNumeric(el.innerText)) {
                    display.value = "";
                }
                display.value += el.innerText;
                justEvaled = false;
            }
        });
    });

    document.querySelectorAll('td').forEach((btn) => {
        validOpts.push(btn.innerText);
    });
};

display.addEventListener('input', () => {
    let newVal = String();

    for (let char of display.value) {
        if (validOpts.includes(char)) {
            newVal += char;
        }
    }

    display.value = newVal;
});

window.addEventListener('load', () => {
    init();
});