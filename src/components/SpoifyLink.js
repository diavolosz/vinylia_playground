import { useEffect } from 'react'


require('dotenv').config()

let querystring = require("querystring")

export default function SpoifyLink() {

  let spotifyAuthorize = () => {
    var scope = 'user-read-private user-read-email';
    let url = 'https://accounts.spotify.com/authorize?' + querystring.stringify({
      response_type: 'code',
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: scope,
      redirect_uri: process.env.REACT_APP_REDIRECT_URL,
      show_dialog: true
    })
    console.log(url)
    window.location.href = url
  }

  // let clearSpotify = () => {
  //   AuthenticationClient.clearCookies(getApplication())
  // }
  return (
    <div>
      <h1>this is a fetch component</h1>
      <button onClick={() => { spotifyAuthorize() }}>Connect with Spotify</button>
    </div>
  )
}