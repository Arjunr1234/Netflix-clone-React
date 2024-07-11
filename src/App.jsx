

import React from 'react'
import {action,orginals} from '../url.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Banner from './components/Banner/Banner.jsx'
import RowPost from './components/RowPost/RowPost.jsx'


function App() {
  

  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title = 'Netflix Orginals'/>
      <RowPost url={action} title = 'Action' isSmall/>
    </div>
  )
}

export default App
