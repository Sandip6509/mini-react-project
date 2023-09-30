import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [cat, setCat] = useState('')

  useEffect(() => {
    const fetchCat = async () => {
      const response =  await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await response.json()
      setCat(data[0].url)
    }
    fetchCat()
  }, [])
  
  const generateNewCat = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    setCat(data[0].url);
  }
  return (
    <>
     <img src={cat} alt="random cat" />
      <button onClick={generateNewCat}>Generate new cat</button>
    </>
  )
}

export default App
