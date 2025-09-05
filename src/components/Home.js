import React from 'react'
import Top from './Top'
import Post from './Post'
import Intro from './Intro'
import Approach from './Approach'
import Menu from './Menu'
import PatientVoices from './PatientVoices'
import AccessMap from './AccessMap'
import Navigation from './Navigation'
import Members from './Members'
import SNS from './SNS'



const Home = () => {
  return (
    <div>
        <Navigation />
        <Top />
        <Post />
        <Intro />
        <Members  />
        <Approach />
        <Menu />
        <PatientVoices />
        <AccessMap />
        <SNS />
        
    </div>
  )
}

export default Home