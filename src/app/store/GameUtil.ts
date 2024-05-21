import { IGameState } from "./gameSlice";

type MoveDirection =
    | 'Left'
    | 'Right'
    | 'Up'
    | 'Down';

function generateTile(board: number[], boardSize: number): { index: number, value: number } | null {
    if (board.filter(x => x === 0).length === 0) {
        return null;
    }

    while (true) {
        const index = Math.floor(Math.random() * boardSize)

        if (board[index] === 0) {
            const value = Math.floor(Math.random() * 4) === 2 ? 4 : 2;

            return { index, value };
        }
    }
}
const getIntitialBoardData = (size: number) => [...Array.from({ length: size }).map((_, __) => 0)];


class GameUtil {

    private board: number[];
    private size: number;

    constructor(private state: IGameState) {
        this.board = state.board;
        this.size = state.size;
    }

    getGridEx(board: number[]): number[][] {
        let grid = [];

        for (let i = 0; i < 4; i++) {
            grid[i] = board.slice(i * 4, i * 4 + 4);
        }

        return grid;
    }

    // Function to transpose a matrix
    transpose(matrix: number[][]): number[][] {
        // Get the number of rows and columns in the original matrix
        const rows = matrix.length;
        const cols = matrix[0].length;

        // Initialize the transposed matrix with the dimensions flipped
        const transposed: number[][] = Array.from({ length: cols }, () => Array(rows).fill(0));

        // Perform the transpose operation
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                transposed[j][i] = matrix[i][j];
            }
        }

        return transposed;
    }

    flattenGridEx(grid: number[][]) {

        return grid.flat();
    }

    move(direction: MoveDirection): number[] {

        const grid = this.getGridEx(this.board);
        const size = this.size;
        let newGrid: number[][] = this.getGridEx(getIntitialBoardData(size));

        if (direction === 'Left') {
            newGrid = grid.map(row => this.moveRowToLeft(row));
        } else if (direction === 'Right') {
            newGrid = grid.map(row => this.moveRowToLeft(row.reverse()).reverse());
        } else if (direction === 'Down') {
            const col: number[] = [];

            for (let colIdx = 0; colIdx < size; colIdx++) {

                for (let rowIdx = 0; rowIdx < size; rowIdx++) {
                    col[rowIdx] = grid[rowIdx][colIdx];
                }
                const newCol = this.moveRowToLeft(col);

                for (let rowIdx = size - 1; rowIdx >= 0; rowIdx--) {
                    newGrid[colIdx][rowIdx] = newCol[rowIdx];
                }
            }
        }
        this.board = this.flattenGridEx(newGrid);

        return this.board;
    }

    // Helper function to move a single row left
    private moveRowToLeft(row: number[]): number[] {

        // Remove zeros and combine tiles
        let newRow = row.filter(val => val !== 0); // Remove zeros
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2; // Combine tiles
                newRow[i + 1] = 0; // Set the combined tile's spot to 0
            }
        }
        newRow = newRow.filter(val => val !== 0); // Remove new zeros created by combining
        // Fill the remaining spaces with zeros to maintain array length of 4
        while (newRow.length < 4) {
            newRow.push(0);
        }

        return newRow;
    }



    // Convert the 2D grid back to a 1D array
    // flattenGrid(grid: number[][]): void {
    //     this.board = grid.flat();
    // }

    // // Convert the 1D array to a 2D grid
    // getGrid(): number[][] {
    //     let grid = [];
    //     for (let i = 0; i < 4; i++) {
    //         grid[i] = this.board.slice(i * 4, i * 4 + 4);
    //     }

    //     console.log(grid);
    //     return grid;
    // }

    // // Move left operation
    // moveLeft(): number[] {
    //     let grid = this.getGrid();
    //     let newGrid = grid.map(row => this.moveRow(row));
    //     this.flattenGrid(newGrid);
    //     return this.board;
    // }

    // // Move right operation
    // moveRight(): number[] {
    //     const grid = this.getGrid();
    //     const newGrid = grid.map(row => {
    //         row.reverse(); // Reverse the row for rightward movement
    //         let movedRow = this.moveRow(row);
    //         movedRow.reverse(); // Reverse back after the move
    //         return movedRow;
    //     });
    //     this.flattenGrid(newGrid);
    //     return this.board;
    // }
}

// Example usage
// const initialBoard = [2, 2, 4, 8, 16, 16, 32, 64, 128, 128, 256, 512, 1024, 0, 0, 0];
// const game = new Game2048(initialBoard);
// console.log("Initial board:", game.board);
// console.log("Board after move left:", game.moveLeft());


export { generateTile, GameUtil };
