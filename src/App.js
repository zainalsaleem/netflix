import React from 'react'
import NavBar from './components/NavBar/NavBar'
import "./App.css"
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'


import { action,animation,fantasy,horror,originals, } from './url'


function App() {
  return (
    <div >
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
       <RowPost  url={action } title='Action' isSmall />
       <RowPost  url={horror} title='Horror' isSmall />
       <RowPost url={animation} title='Animation' isSmall/> 
       <RowPost url={fantasy} title='Fantasy' isSmall/> 
     
       

    </div>
  )
}

export default App
