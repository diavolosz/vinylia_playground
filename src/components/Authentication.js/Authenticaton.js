


import { useEffect, useState } from "react"
import SignedOut from "./SignedOut"
import SignedIn from "./SignedIn"

import { auth } from "../../server/config"




export default function Authenticaton() {

  const [logInState, setLogInState] = useState("")

  useEffect(() => {
    if (localStorage.logInState === "true") {
      setLogInState(true)
    } else {
      setLogInState(false)
    }
  }, [])

  const check = () => {
    console.log(localStorage.logInState)
    console.log(logInState)
    console.log(auth?.currentUser)
  }

  return (
    <div>
      {logInState ?
        <SignedIn setLogInState={setLogInState} />
        :
        <SignedOut setLogInState={setLogInState} />
      }
      {/* <SignedIn setLogInState={setLogInState} /> */}

      {/* <button onClick={() => { check() }}>check user</button> */}
    </div>
  )
}