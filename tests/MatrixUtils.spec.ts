import { rotateMatrix, rotateMatrixCounterClockwise } from "@/app/store/MatrixUtils";


// Test cases
describe('rotateMatrix', () => {
    it('should rotate a 4x4 matrix by 90 degrees clockwise', () => {
        const matrix: number[][] = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];

        const expected: number[][] = [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4]
        ];

        expect(rotateMatrix(matrix)).toEqual(expected);
    });

    it('should handle an already rotated matrix', () => {
        const matrix: number[][] = [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4]
        ];

        const expected: number[][] = [
            [16, 15, 14, 13],
            [12, 11, 10, 9],
            [8, 7, 6, 5],
            [4, 3, 2, 1]
        ];

        expect(rotateMatrix(matrix)).toEqual(expected);
    });

    it('should handle a matrix with negative numbers', () => {
        const matrix: number[][] = [
            [-1, -2, -3, -4],
            [-5, -6, -7, -8],
            [-9, -10, -11, -12],
            [-13, -14, -15, -16]
        ];

        const expected: number[][] = [
            [-13, -9, -5, -1],
            [-14, -10, -6, -2],
            [-15, -11, -7, -3],
            [-16, -12, -8, -4]
        ];

        expect(rotateMatrix(matrix)).toEqual(expected);
    });
});

// Test cases
describe('rotateMatrixCounterClockwise', () => {
    it('should rotate a 4x4 matrix by 90 degrees counterclockwise', () => {
        const matrix: number[][] = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];

        const expected: number[][] = [
            [4, 8, 12, 16],
            [3, 7, 11, 15],
            [2, 6, 10, 14],
            [1, 5, 9, 13]
        ];

        expect(rotateMatrixCounterClockwise(matrix)).toEqual(expected);
    });

    it('should handle an already rotated matrix', () => {
        const matrix: number[][] = [
            [4, 8, 12, 16],
            [3, 7, 11, 15],
            [2, 6, 10, 14],
            [1, 5, 9, 13]
        ];

        const expected: number[][] = [
            [16, 15, 14, 13],
            [12, 11, 10, 9],
            [8, 7, 6, 5],
            [4, 3, 2, 1]
        ];

        expect(rotateMatrixCounterClockwise(matrix)).toEqual(expected);
    });

    it('should handle a matrix with negative numbers', () => {
        const matrix: number[][] = [
            [-1, -2, -3, -4],
            [-5, -6, -7, -8],
            [-9, -10, -11, -12],
            [-13, -14, -15, -16]
        ];

        const expected: number[][] = [
            [-4, -8, -12, -16],
            [-3, -7, -11, -15],
            [-2, -6, -10, -14],
            [-1, -5, -9, -13]
        ];

        expect(rotateMatrixCounterClockwise(matrix)).toEqual(expected);
    });
});
