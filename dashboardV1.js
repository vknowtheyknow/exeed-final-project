import React from 'react'
// import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import './App.css'
import './Dashboard.css'
import Page404 from './page404'
import tigerInfo from './tigerInfo'

function App() {
    return (
      <div className="App">
				<header className="App-header">
					<h1>tiger friends</h1>
        	<Dashboard />
        	<button type="button" className="open-cage">opencage</button>
				</header>
		</div>
    )
}

export default App
