'use client'

import { Provider } from 'react-redux'
import { store } from './store/store'
import GameBoard from './GameBoard'
import { GameControls } from './GameControls'

export default function Home () {
  
  return (
    <Provider store={store}>
      
      <main className='flex min-h-screen flex-col items-center '>
        <GameControls />
        <GameBoard />
      </main>
    </Provider>
  );
}
