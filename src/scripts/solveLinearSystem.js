export function solveLinearSystem(matrixA, vectorB) {
  let n = vectorB.length;

  function isSingular(matrix) {
      for (let i = 0; i < n; i++) {
          if (matrix[i][i] === 0) {
              return true;
          }
      }
      return false;
  }

  for (let k = 0; k < n - 1; k++) {
      for (let i = k + 1; i < n; i++) {
          let factor = matrixA[i][k] / matrixA[k][k];
          for (let j = k; j < n; j++) {
              matrixA[i][j] -= factor * matrixA[k][j];
          }
          vectorB[i] -= factor * vectorB[k];
      }
  }

  if (isSingular(matrixA)) {
      return "O sistema é singular, não é possível determinar o tipo de solução.";
  } else {
      let solution = [];
      for (let i = n - 1; i >= 0; i--) {
          let sum = 0;
          for (let j = i + 1; j < n; j++) {
              sum += matrixA[i][j] * solution[n - 1 - j];
          }
          solution.push((vectorB[i] - sum) / matrixA[i][i]);
      }
      
      return solution.reverse();
  }
}

// Exemplo de sistema de equações 3x3
let matrixA = [
  [2, -1, 3],
  [1, 1, 1],
  [1, -3, -2]
];
let vectorB = [7, 2, -4];

// Resolver o sistema
let solution = solveLinearSystem(matrixA, vectorB);
console.log("Solução do sistema: " + solution);

// Verificar o tipo de solução do sistema
let solutionType = solveLinearSystem(matrixA, vectorB);
console.log(solutionType);