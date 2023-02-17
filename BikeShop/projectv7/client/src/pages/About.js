import React, { useEffect, useState } from 'react'
import Axios from 'axios'



const About = () => {
  const [Tryy,setTryy] = useState('');

  Axios.defaults.withCredentials = true
  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn == true) {
        //console.log(response.data.user_ID+'ggggggg');
        setTryy(response.data.user[0].user_ID);
      }
    })
  }, [])

  
  return (
    <div>
      <h1>hi</h1>
      <h1>{Tryy +'g'}</h1>
    </div>
  )                                       /////to access user name
}

export default About
