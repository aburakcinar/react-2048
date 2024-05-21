'use client'

import { useDispatch } from 'react-redux';
import { newGame } from './store/gameSlice';

function GameControls() {
    const dispatcher = useDispatch();

    const resetGame = () => {
        dispatcher(newGame());
    };

    return (
        <div className='flex flex-row items-center p-4 bg-game'>
            <div className='flex-none'>
                <h1 className='text-orange-700 text-6xl'>2048</h1>
            </div>
            <div className='flex-auto'>&nbsp;</div>
            <div className='flex-none'>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={_ => resetGame()}
                >
                    Restart!
                </button>
            </div>
        </div>
    );
}

export { GameControls }
