import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Paragraph from './components/Paragraph'

import UserPara from './components/UserPara'
import UserInputForm from './components/UserInputForm'


function App() {
  const [paragraph, setParagraph] = useState('test')

  const [userInput, setUserInput] = useState('**userInput will appear here**')


  const callAPI = () => {
    return axios.get('http://metaphorpsum.com/paragraphs/1/5')
  }

  async function getData() {
    try {
      const jsonResponse = await callAPI()

      const response = jsonResponse.data
      console.log(response.split(''))


      setParagraph(jsonResponse.data)

    } catch (error) {
      console.error('Error occurred fetching data: ', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div className="App">

      <h1>LOGAN'S TYPE RACER!</h1>
      <hr />

      <Paragraph paragraph={paragraph} />
      <hr />

      <UserPara userInput={userInput} />


      <UserInputForm setUserInput={setUserInput} />


    </div>
  )
}

export default App
