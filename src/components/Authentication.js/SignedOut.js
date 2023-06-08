
import { useState } from "react"
import { auth, googleProvider } from "../../server/config"
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, signOut } from "firebase/auth"

export default function SignedOut(props) {

  let { setLogInState } = props


  let [signState, setSignState] = useState(true)
  let [emailSignIn, setEmailSignIn] = useState("")
  let [passwordSignIn, setPasswordSignIn] = useState("")

  let [emailSignUp, setEmailSignUp] = useState("")
  let [passwordSignUp, setPasswordSignUp] = useState("")

  const userSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
      setLogInState(true)
      localStorage.setItem('logInState', true)
    } catch (e) {
      console.error(e)
    }
  }

  const userSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn)
      setLogInState(true)
      localStorage.setItem('logInState', true)
    } catch (e) {
      console.error(e)
    }
  }

  const userGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      setLogInState(true)
      localStorage.setItem('logInState', true)
    } catch (e) {
      console.error(e)
    }
  }



  return (
    <div>
      you are currently signed Out

      {signState ?
        <div>
          <div>Click to sign in</div>
          <input placeholder="enter email" value={emailSignIn} onChange={(e) => { setEmailSignIn(e.target.value) }}></input>
          <input placeholder="enter password" value={passwordSignIn} onChange={(e) => { setPasswordSignIn(e.target.value) }}></input>
          <button onClick={() => userSignIn()}>click to sign in</button>
        </div>
        :
        <div>
          <div>Click to sign Up</div>
          <input placeholder="enter email" value={emailSignUp} onChange={(e) => { setEmailSignUp(e.target.value) }}></input>
          <input placeholder="enter password" value={passwordSignUp} onChange={(e) => { setPasswordSignUp(e.target.value) }}></input>
          <button onClick={() => userSignUp()}>click to make a new account</button>
        </div>

      }

      <div>
        {signState ?
          <p>Dont have a password? click <u onClick={() => setSignState(false)}>here</u> to sign up </p>
          :
          <p>Already have an account? click <u onClick={() => setSignState(true)}>here</u> to sign in instead</p>
        }
      </div>



      {/* <button>click to sign up</button>
      <button>click to sign in with google</button> */}
    </div>
  )
}