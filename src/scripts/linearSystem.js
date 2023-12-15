const state = {
  values: {
    decimalPlaces: 2,
    systemOrder: 3,
    matrixA: [],
    vectorB: [],
  },
}
function solveLinearSystem() {
  let n = state.values.systemOrder;

  state.values.matrixA = [];
  state.values.vectorB = [];
  
  const matrix = {};
  const vector = {};

  const coefs = document.querySelectorAll('input[type="number"');

  coefs.forEach(element => {
    const id = element.id
    if (element.id[0] === "a") {
      matrix[id] = Number(document.getElementById(id).value);
    } else if (element.id[0] === "b") {
      vector[id] = Number(document.getElementById(id).value);
    }
  })

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
        let key = 'a' + (i + 1) + (j + 1);
        row.push(matrix[key]);
    }
    state.values.matrixA.push(row);
  }
  for (let i = 0; i < n; i++) {
    let key = 'b' + (i+1) 
    state.values.vectorB.push(vector[key])
  }
const augmentedMatrix = state.values.matrixA.map((row, i) => row.concat([state.values.vectorB[i]]));

for (let i = 0; i < n; i++) {
    let maxRowIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (Math.abs(augmentedMatrix[j][i]) > Math.abs(augmentedMatrix[maxRowIndex][i])) {
            maxRowIndex = j;
        }
    }

    [augmentedMatrix[i], augmentedMatrix[maxRowIndex]] = [augmentedMatrix[maxRowIndex], augmentedMatrix[i]];

    for (let k = i + 1; k < n; k++) {
        const factor = augmentedMatrix[k][i] / augmentedMatrix[i][i];
        for (let j = i; j <= n; j++) {
            augmentedMatrix[k][j] -= factor * augmentedMatrix[i][j];
        }
    }
}

const solutions = new Array(n);
for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
        sum += augmentedMatrix[i][j] * solutions[j];
    }
    solutions[i] = (augmentedMatrix[i][n] - sum) / augmentedMatrix[i][i];
}

let solution;
if (!document.querySelector(".solution")) {
  solution = document.createElement("div");
  solution.classList.add("solution");
  solution.classList.add("flex-col");
} else {
  solution = document.querySelector(".solution");
  solution.innerHTML = "";
}

let i = 1;
solutions.forEach((answer => {
  const x = document.createElement("span");
  x.textContent = `x${i}:  ${answer}`
  solution.appendChild(x)
  i = i + 1;
}));
const main = document.querySelector(".main")
main.appendChild(solution)
}

export function linearEquationSystemStart() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = "Sistemas de Equações Lineares";
  main.appendChild(header);

  const entries = document.createElement("div");
  entries.classList.add("entries");
  for (let i = 1; i <= state.values.systemOrder; i++) {
    const equation = document.createElement("div");
    equation.classList.add("equation")

    for (let j = 1; j  <= state.values.systemOrder + 1; j++) {
      const coef = document.createElement("input");
      equation.appendChild(coef);
      if (j < state.values.systemOrder) {
        coef.id = `a${i}${j}`;
        coef.type = "number";
        coef.defaultValue = 0;
        equation.innerHTML += ` x${j} + `;
      } else if (j === state.values.systemOrder) {
        coef.id = `a${i}${j}`;
        coef.type = "number";
        coef.defaultValue = 0;
        equation.innerHTML += ` x${j} = `;
      } else {
        coef.id = `b${i}`;
        coef.type = "number";
        coef.defaultValue = 0;
      }
    }
    entries.appendChild(equation)
  }
  main.appendChild(entries)

  const buttons = document.createElement("div");
  buttons.classList.add("buttons-area");

  const calculate = document.createElement("button");
  calculate.textContent = "Calcular";
  calculate.addEventListener("click", () => solveLinearSystem(state.values.matrixA, state.values.vectorB));
  buttons.appendChild(calculate);
  
  const reset = document.createElement("button");
  reset.classList.add("deny")
  reset.textContent = "Limpar";
  reset.addEventListener("click", () => handleReset());
  buttons.appendChild(reset);

  main.appendChild(buttons)
}
// Exemplo de sistema de equações 3x3
let matrixA = [
  [2, -1, 3],
  [1, 1, 1],
  [1, -3, -2]
];
let vectorB = [7, 2, -4];