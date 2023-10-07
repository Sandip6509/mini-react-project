import { useState } from 'react'
import './App.css'
import UserProfileCard from './components/UserProfileCard'

function App() {

  return (
    <>
      <UserProfileCard
        name="Patterson johnson"
        profilePicture="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        email="patterson@example.com"
        jobTitle="UI / UX Designer"
        address="California,USA"
        phone=""
      />
    </>
  )
}

export default App
