const container = document.getElementById("container")
const symbolsObj =
      {
        "Programming": ["?", "→", ":", "◢", "⇒", "=", "≠", ">", "<", "≧", "≦", "Goto ", "Lbl ", "While ", "WhileEnd", "If ", "Then ", "Else ", "IfEnd", "For ", "To ", "Step ", "Next", "Break"],
        "Numbers": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "⁻¹", "²", "³"],
        "Basic Operators": ["+", "−", "×", "÷", "┘", "(", ")", "^(", "%", "E", "√(", "³√(", "ˣ√("],
        "Functions": ["sin(", "cos(", "tan(", "sin-1(", "cos-1(", "tan-1(", "sinh(", "cosh(", "tanh(", "sinh-1(", "cosh-1(", "tanh-1(", "log(", "ln(", "Rnd(", "Pol(", "Rec(", "Abs("],
        "Memory": ["A", "B", "C", "D", "X", "Y", "M", "M+", "M-", "ClrMemory", "Ans"],
        "Setup": ["Fix ", "Sci ", "Norm ", "Deg ", "Rad ", "Gra "],
        "Other": ["P", "C", ",", ";", "Ran#", "π"],
        "Complex Mode": ["i", "∠", ">r∠θ", ">a+bi", "arg(", "Conig("],
        "SD/REG Mode": ["ClrStat", "FreqOn", "FreqOff", "Σx²", "Σx", "n", "Σy²", "Σy", "Σxy", "Σx²y", "Σx³", "Σx⁴", "x̄", "σx", "sx", "ȳ", "σy", "sy", "a", "b", "r", "x̂", "ŷ", "minX", "maxX", "minY", "maxY", ";", "DT"]
      }

for (let key in symbolsObj) {
  container.innerHTML += `<small class="text-secondary">${key}</small><br>`
  for (let symbol of symbolsObj[key]) {
    container.innerHTML += `<button onclick="append(this);" type="button" class="btn btn-secondary m-1">${symbol}</button>` 
  }
  container.innerHTML += '<br>'
}

function append(myValue) {
    //IE support
    const myField = document.getElementById("code")
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
    } else {
        myField.value += myValue;
    }
}
