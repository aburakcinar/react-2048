// store/gameSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameUtil, generateTile } from './GameUtil'

const boardSize = 16;

export interface IGameState {
    size: number;
    board: number[];
    score: number;
    gameOver: boolean;
}

const getIntitialBoardData = () => [...Array.from({ length: boardSize }).map((_, __) => 0)];

const initialState: IGameState = {
    size: 4,
    board: getIntitialBoardData(),
    score: 0,
    gameOver: false
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newGame: state => {
            state.board = getIntitialBoardData();
            state.gameOver = false;
            state.score = 0;
            const tile1 = generateTile(state.board, boardSize);

            if (tile1) {
                state.board[tile1.index] = tile1.value;
            }

            const tile2 = generateTile(state.board, boardSize);
            if (tile2) {
                state.board[tile2.index] = tile2.value;
            }
        },
        moveUp: state => {
            // Logic to move tiles up
            const mover = new GameUtil(state);
            state.board = mover.move('Up');
            const tile1 = generateTile(state.board, boardSize);

            if (tile1) {
                state.board[tile1.index] = tile1.value;
            }
        },
        moveDown: state => {
            // Logic to move tiles down
            // generateTile(state, boardSize);
            const mover = new GameUtil(state);
            state.board = mover.move('Down');
            const tile1 = generateTile(state.board, boardSize);

            if (tile1) {
                state.board[tile1.index] = tile1.value;
            }
        },
        moveLeft: state => {
            // Logic to move tiles left
            // generateTile(state, boardSize);
            const mover = new GameUtil(state);
            state.board = mover.move('Left');
            const tile1 = generateTile(state.board, boardSize);

            if (tile1) {
                state.board[tile1.index] = tile1.value;
            }
        },
        moveRight: state => {
            // Logic to move tiles right
            // generateTile(state, boardSize);

            // - scan rows
            //    - Find mergeable tiles
            //    - Shift tiles
            // - Check is there any movement
            //    - if there is a movement, create a new random tile
            const mover = new GameUtil(state);
            state.board = mover.move('Right');
            const tile1 = generateTile(state.board, boardSize);

            if (tile1) {
                state.board[tile1.index] = tile1.value;
            }
        }
    }
})

export const { newGame, moveUp, moveDown, moveLeft, moveRight } =
    gameSlice.actions;

export default gameSlice.reducer;

