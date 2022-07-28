import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Paragraph from './components/Paragraph'

import UserPara from './components/UserPara'
import UserInputForm from './components/UserInputForm'


function App() {
  // The text that the user follows to type
  const [paragraph, setParagraph] = useState('test')

  // The text that is displayed when the user types
  const [userInput, setUserInput] = useState('**userInput will appear here**')

  // The number of characters the user has typed in the input form
  const [numChars, setNumChars] = useState(0)

  const callAPI = () => {
    return axios.get('http://metaphorpsum.com/paragraphs/1/5')
  }

  async function getData() {
    try {
      const jsonResponse = await callAPI()

      const response = jsonResponse.data
      // console.log(response.split(''))


      setParagraph(jsonResponse.data)

    } catch (error) {
      console.error('Error occurred fetching data: ', error)
    }
  }

  // On mounting, get the paragraph
  useEffect(() => {
    getData()
  }, [])

  // whenever the length of userInput updates, print the length
  useEffect(() => {
    // console.log(numChars)
  }, [numChars])



  return (
    <div className="App">

      <h1>LOGAN'S TYPE RACER!</h1>
      <hr />

      <Paragraph paragraph={paragraph} />
      <hr />

      <UserPara userInput={userInput} paragraph={paragraph} />
      <br />

      <UserInputForm setUserInput={setUserInput} setNumChars={setNumChars} />


    </div>
  )
}

export default App
