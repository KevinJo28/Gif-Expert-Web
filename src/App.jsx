import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import DisplayGif from './components/DisplayGifs'

function App() { 
  const [category, setCategory] = useState("")
 

  return (
    <div className='App'>
      <h2>Main component</h2>
      <AddCategory setCategory={setCategory}/>
      <DisplayGif category={category}/>
    </div>
  )
}

export default App
