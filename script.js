const container = document.getElementById("container")
const symbolsObj =
      {
        "Numbers": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "⁻¹", "²", "³"],
        "Basic Operators": ["+", "−", "×", "÷", "┘", "(", ")", "^(", "%", "E", "√(", "³√(", "ˣ√("],
        "Functions": ["sin(", "cos(", "tan(", "sin-1(", "cos-1(", "tan-1(", "sinh(", "cosh(", "tanh(", "sinh-1(", "cosh-1(", "tanh-1(", "log(", "ln(", "Rnd(", "Pol(", "Rec(", "Abs("],
        "Programming": ["?", "→", ":", "◢", "⇒", "=", "≠", ">", "<", "≧", "≦", "Goto", "Lbl", "While", "WhileEnd", "If", "Then", "Else", "IfEnd", "For", "To", "Step", "Next", "Break"],
        "Memory": ["A", "B", "C", "D", "X", "Y", "M", "M+", "M-", "ClrMemory", "Ans"],
        "Setup": ["Fix", "Sci", "Norm", "Deg", "Rad", "Gra"],
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

function append(button) {
  const code = document.getElementById("code")
  code.value += button.innerHTML;
}