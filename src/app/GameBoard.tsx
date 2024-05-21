import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filter, fromEvent } from 'rxjs'
import { moveDown, moveLeft, moveRight, moveUp } from './store/gameSlice'
import { useAppSelector } from './store/store'

const GameBoard: React.FC = () => {
  const dispatcher = useDispatch()
  const boardData = useAppSelector(x => x.game.board)

  useEffect(() => {
    const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    const keyEvent$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter(event => arrowKeys.includes(event.key))
    )

    const subscription = keyEvent$.subscribe(event => {
      console.log(`Key pressed: ${event.key}`)
      // Implement your functionality for each key press here
      if (event.key === 'ArrowUp') {
        dispatcher(moveUp())
      } else if (event.key === 'ArrowDown') {
        dispatcher(moveDown())
      } else if (event.key === 'ArrowLeft') {
        dispatcher(moveLeft())
      } else if (event.key === 'ArrowRight') {
        dispatcher(moveRight())
      }
    })

    // Cleanup subscription on component unmount
    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className='grid grid-cols-4 gap-4 p-3 border rounded-md bg-board'>
      {Array.from({ length: 16 }).map((_, index) => {
        const val = boardData[index]
        const valStr = val === 0 ? '' : val.toString()

        return (
          <div key={index} className='aspect-square  flex tile'>
            {valStr}
          </div>
        )
      })}
    </div>
  )
}

export default GameBoard
