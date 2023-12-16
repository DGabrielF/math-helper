const state = {
  views: {
    main: document.querySelector(".main"),
  },
  values: {
    decimalPlaces: 2,
  }
}

function handleReset() {
  const a = document.querySelector("#second-degree-coef-a");
  const b = document.querySelector("#second-degree-coef-b");

  a.value = 1;
  b.value = 1;
}

function handleResolve() {
  const a = document.getElementById("second-degree-coef-a").value;
  const b = document.getElementById("second-degree-coef-b").value;

  let solution;

  if (!document.querySelector(".solution")) {
    solution = document.createElement("div");
    solution.classList.add("solution");
  } else {
    solution = document.querySelector(".solution");
    solution.innerHTML = "";
  }

  const solutionType = document.createElement("span");
  let inclination;
  if (a > 0) {
    inclination = "Função crescente, com raíz";
  } else if (a < 0) {
    inclination = "Função decrescente, com raíz";
  } else if (a === 0) {
    inclination = "Função contante, com raíz"
  }
  solutionType.textContent = inclination;

  state.views.main.appendChild(solutionType);

  const root = document.createElement("span");
  root.textContent = `x: ${(-b/a).toFixed(state.values.decimalPlaces)}`;

  solution.appendChild(root);

  state.views.main.appendChild(solution);
}

export function firstDegreeStart () {
  const main = state.views.main;

  main.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = "Equação de Primeiro Grau";
  main.appendChild(header);

  const standard = document.createElement("h3");
  const text = document.createElement("p");
  text.textContent = "Formato padrão";
  standard.appendChild(text);
  const example = document.createElement("span");
  example.textContent = "a x + b = 0";
  standard.appendChild(example);
  main.appendChild(standard);

  const a = document.createElement("input");
  a.type = "number";
  a.id = "second-degree-coef-a";
  a.defaultValue = 1;
  const b = document.createElement("input");
  b.type = "number";
  b.id = "second-degree-coef-b";
  b.defaultValue = 1;
  
  const equation = document.createElement("div");
  equation.classList.add("equation");

  equation.appendChild(a);
  equation.innerHTML += " x + ";
  equation.appendChild(b);
  equation.innerHTML += " = 0";

  const entries = document.createElement("div");
  entries.classList.add("entries");
  entries.appendChild(equation);

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

  main.appendChild(buttons);

  const decimalPlacesLabel = document.createElement("label");
  decimalPlacesLabel.textContent = "Casas decimais: ";
  main.appendChild(decimalPlacesLabel);

  const decimalPlaces = document.createElement("input");
  decimalPlaces.type = "number";
  decimalPlaces.defaultValue = 2;
  decimalPlaces.addEventListener ("change", e => { state.values.decimalPlaces = e.target.value });
  main.appendChild(decimalPlaces);
}