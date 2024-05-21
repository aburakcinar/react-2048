import { GameUtil } from "@/app/store/GameUtil";
import { IGameState } from "@/app/store/gameSlice";
import { describe, it } from "node:test";

describe('GameUtil', () => {

    test('moveRight - 01', () => {

        // Arrange
        const state: IGameState = {
            size: 4,
            board: [
                0, 0, 0, 0,
                0, 0, 0, 2,
                0, 2, 0, 0,
                0, 0, 0, 2
            ],
            score: 0,
            gameOver: false
        };

        const util = new GameUtil(state);

        // Act
        const board = util.move('Left');

        // Assert
        expect(board).toStrictEqual([
            0, 0, 0, 0,
            2, 0, 0, 0,
            2, 0, 0, 0,
            2, 0, 0, 0
        ]);
    });
});
