

// Function to rotate a 4x4 matrix by 90 degrees clockwise
function rotateMatrix(matrix: number[][]): number[][] {
    // Get the number of rows (and columns, since it's a square matrix)
    const n = matrix.length;

    // Initialize the rotated matrix
    const rotated: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    // Perform the rotation by transposing and then reversing rows
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - 1 - i] = matrix[i][j];
        }
    }

    return rotated;
}

function rotateMatrixCounterClockwise(matrix: number[][]): number[][] {
    // Get the number of rows (and columns, since it's a square matrix)
    const n = matrix.length;

    // Initialize the rotated matrix
    const rotated: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    // Perform the rotation by transposing and then reversing columns
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[n - 1 - j][i] = matrix[i][j];
        }
    }

    return rotated;
}

export { rotateMatrix, rotateMatrixCounterClockwise };