import logo from './logo.svg';
import './App.css';


import SpoifyLink from './components/SpoifyLink';
import Authenticaton from './components/Authentication.js/Authenticaton';
import { useEffect, useState } from 'react';

let querystring = require("querystring")


function App() {

  const [logInState, setLogInState] = useState("")
  const [code, setCode] = useState(null)
  const [token, setToken] = useState(null)

  const fetchAccessToken = async (code) => {

    let client_secret = process.env.REACT_APP_CLIENT_SECRET
    let client_id = process.env.REACT_APP_CLIENT_ID
    let redirect_url = process.env.REACT_APP_REDIRECT_URL

    const urlParam = new URLSearchParams();
    urlParam.append("grant_type", "authorization_code");
    urlParam.append("code", code);
    urlParam.append("client_id", client_id);
    urlParam.append("client_secret", client_secret);
    urlParam.append("redirect_uri", redirect_url);


    await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: urlParam
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem("accessToken", data.access_token)
        console.log(data.access_token)
        setToken(data.access_token)
        return data.access_token;
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }



  //spotify link code retrieve will trigger a refresh which useEffect will activate to save code
  const getCode = async () => {
    let code = null
    const queryString = window.location.search
    if (queryString.length) {
      const urlParam = new URLSearchParams(queryString)
      code = urlParam.get("code")
    }
    setCode(code)
    return code
  }


  useEffect(() => {
    if (window.location.search.length) {
      getCode()
    }
    if (localStorage.accessToken) {
      setToken(localStorage.accessToken)
    }
  }, [])

  useEffect(() => {
    if (code && !token) {
      fetchAccessToken(code)
    }
  }, [code])

  return (
    <div className="App">

      {/* <Authenticaton
        logInState={logInState}
        setLogInState={setLogInState}
      /> */}

      <SpoifyLink
        code={code}
        fetchAccessToken={fetchAccessToken}
        getCode={getCode}
      />

    </div>
  );
}

export default App;
