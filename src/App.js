import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import {Action,orginals,Comedy,Horror,Romance,Documentries} from './urls'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'

function App() {
  return (
    <div className='App'> 
      <Navbar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={Action} title='Action' isSmall/>
      <RowPost url={Comedy} title='Comedy' isSmall/>
      <RowPost url={Horror} title='Horror' isSmall/>
      <RowPost url={Romance} title='Romance' isSmall/>
      <RowPost url={Documentries} title='Documentries' isSmall/>

    </div>
  )
}

export default App