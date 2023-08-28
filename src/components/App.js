
import React, { useEffect, useState } from "react";
import './../styles/App.css';
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
const App = () => {
  const [fruit,setFruit] = useState("");
  const [filteredFruits,setFilteredFruits] = useState(fruits)

  useEffect(() => {
    setFilteredFruits(fruits.filter(item => {
      return item.includes(fruit.toLowerCase().trim())
    }))
  },[fruit])
  return (
    <div>
        <h1>Search Item</h1>
        <form>
          <input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)}/>
        </form>
        <ul>
        
        {filteredFruits.map(item => {
          return <li>{item}</li>
        })}
        </ul>
    </div>
  )
}

export default App
