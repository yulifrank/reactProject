import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormAddMeeting from './components/formAddMeeting/FormAddMeeting'
import LoginPage from './components/loginPage/LoginPage'
import MyComponent from './components/MyComponent'
// import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
    <FormAddMeeting></FormAddMeeting>
    <MyComponent></MyComponent>
   </>
  )
}

export default App
