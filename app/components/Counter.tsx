'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p className='bg-black text-yellow-100'>Counter: {count} !</p>
      <button className='btn btn-primary btn-lg m-2'  onClick={() => setCount(count + 1)}>Increment</button>
      <button className='btn btn-primary m-2'  onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}