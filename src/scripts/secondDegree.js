const state = {
  values: {
    decimalPlaces: 2,
  }
}
function handleResolve() {
  const a = document.getElementById("second-degree-coef-a").value;
  const b = document.getElementById("second-degree-coef-b").value;
  const c = document.getElementById("second-degree-coef-c").value;
  
  let solution;

  if (!document.querySelector(".solution")) {
    solution = document.createElement("div");
    solution.classList.add("solution");
  } else {
    solution = document.querySelector(".solution");
    solution.innerHTML = "";
  }

  const delta = b ** 2 - 4 * a * c;  
  const solutionType = document.createElement("span");  
  const root = document.createElement("span");

  if (delta > 0) {
    solutionType.innerHTML = `Possui duas soluções reais e distintas </br> com discriminante = ${delta}`;
    solution.appendChild(solutionType);
    
    root.textContent = `
      x': ${((-b - Math.sqrt(delta))/(2 * a)).toFixed(state.values.decimalPlaces)}  e 
      x": ${((-b + Math.sqrt(delta))/(2 * a)).toFixed(state.values.decimalPlaces)}
    `;    
  } else if (delta === 0) {
    solutionType.textContent = "Possui duas soluções reais e idênticas";
    solution.appendChild(solutionType);
    
    root.textContent = `x: ${(-b /(2 * a)).toFixed(state.values.decimalPlaces)}`;
  } else if (delta < 0) {
    solutionType.textContent = "Possui duas soluções complexas e distintas";
    solution.appendChild(solutionType);
    
    root.textContent = `
    x': ${(-b/(2 * a)).toFixed(state.values.decimalPlaces)} - ${(Math.sqrt(Math.abs(delta))/(2 * a)).toFixed(state.values.decimalPlaces)}i e 
    x": ${(-b/(2 * a)).toFixed(state.values.decimalPlaces)} + ${(Math.sqrt(Math.abs(delta))/(2 * a)).toFixed(state.values.decimalPlaces)}i
    `; 
  }
  solution.appendChild(root);
  const criticalPointLabel = document.createElement("span");
  criticalPointLabel.textContent = `E o seu ponto ${(a>0)?"máximo":"mínimo"} se encontra em:`;
  solution.appendChild(criticalPointLabel);
  const criticalPoint = document.createElement("span");
  criticalPoint.textContent = `X = ${(-b / (2 * a)).toFixed(state.values.decimalPlaces)} e Y = ${(-delta / (4 * a).toFixed(state.values.decimalPlaces))}`;
  solution.appendChild(criticalPoint);
  
  const main = document.querySelector(".main");
  main.appendChild(solution);
}

function handleReset() {
  const a = document.querySelector("#second-degree-coef-a");
  const b = document.querySelector("#second-degree-coef-b");
  const c = document.querySelector("#second-degree-coef-c");

  a.value = 1;
  b.value = 1;
  c.value = 1;
}

export function secondDegreeStart() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  
  const header = document.createElement("h2");
  header.textContent = "Equação de Segundo Grau";
  main.appendChild(header);

  const standard = document.createElement("h3");
  standard.textContent = "Formato padrão: a x² + b x + c = 0";
  main.appendChild(standard);
  
  const a = document.createElement("input");
  a.type = "number";
  a.id = "second-degree-coef-a";
  a.defaultValue = 1;
  const b = document.createElement("input");
  b.type = "number";
  b.id = "second-degree-coef-b";
  b.defaultValue = 1;
  const c = document.createElement("input");
  c.type = "number";
  c.id = "second-degree-coef-c";
  c.defaultValue = 1;
  
  const entries = document.createElement("div");
  entries.classList.add("entries")
  entries.appendChild(a);
  entries.innerHTML += " x² + ";
  entries.appendChild(b);
  entries.innerHTML += " x + ";
  entries.appendChild(c);
  entries.innerHTML += " = 0";  
  main.appendChild(entries);
  
  const buttons = document.createElement("div");
  buttons.classList.add("buttons-area");

  const calculate = document.createElement("button");
  calculate.textContent = "Calcular";
  calculate.addEventListener("click", () => handleResolve());
  buttons.appendChild(calculate);
  
  const reset = document.createElement("button");
  reset.classList.add("deny")
  reset.textContent = "Limpar";
  reset.addEventListener("click", () => handleReset());
  buttons.appendChild(reset);

  main.appendChild(buttons)

  const decimalPlacesLabel = document.createElement("label");
  decimalPlacesLabel.textContent = "Casas decimais: ";
  main.appendChild(decimalPlacesLabel);

  const decimalPlaces = document.createElement("input");
  decimalPlaces.type = "number";
  decimalPlaces.defaultValue = 2;
  decimalPlaces.addEventListener ("change", e => { state.values.decimalPlaces = e.target.value });
  main.appendChild(decimalPlaces);
}