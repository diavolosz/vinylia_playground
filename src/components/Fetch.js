import { useEffect } from 'react'


require('dotenv').config()

export default function Fetch() {

  let token = process.env.REACT_APP_TOKEN

  // useEffect(() => {console.log(token)}, [])
  let print = () => {
    console.log(token)
  }
  return (
    <div>
      <h1>this is a fetch component</h1>
      <button onClick={() => {print()}}>test</button>
    </div>
  )
}