

import { auth } from "../../server/config"
import { signOut } from "firebase/auth"


export default function SignedIn(props) {

  let {setLogInState} = props

  const userSignOut = async () => {
    try{
     await signOut(auth) 
     setLogInState(false)
     localStorage.setItem('logInState', false)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div>
      you are currently signed in
      <button onClick={() => userSignOut()} >sign out</button>
    </div>
  )
} 