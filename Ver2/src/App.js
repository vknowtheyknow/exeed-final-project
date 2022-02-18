import React from 'react'
// import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Page404 from './page404'
import Tigerinfo from './tigerInfo'
import ElementDashboard from './ElementDashboard'


const pics =[
    "https://media.4-paws.org/5/4/4/c/544c2b2fd37541596134734c42bf77186f0df0ae/VIER%20PFOTEN_2017-10-20_164-3854x2667-1920x1329.jpg",
    "https://static.bangkokpost.com/media/content/20200219/c1_1860789_200219162635.jpg",
    "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1199,h_800/w_74,x_13,y_13,g_south_west,l_klook_water/activities/dtxxval61hyxkeqlqaou/TigerKingdomTicketinPhuketforThaiResidents.jpg",
    "https://i.natgeofe.com/k/1bf26ec6-00ec-4054-ac87-160bed47ff4f/tiger2_3x2.png",
    "https://media.istockphoto.com/photos/smirking-tiger-picture-id157506528?k=20&m=157506528&s=612x612&w=0&h=p1jSOLLlFobf0iE2sThO3EcSPP7As4nQ41ndeQQJ60s=",
    "https://i.natgeofe.com/n/3ccdfcd5-3e4d-4821-bd80-fc896a9c3599/2944046_4x3.jpg"
  
];
const Cases =[
    { 
    case: 1,
    temp: 30.4,
    cageStatus: 0, //(0,1)สถานะผิดปกติคือ 1
    vibrate: 0, //(0,1) 
    hungry: 1 //(0,1) 
    },
    { 
      case: 2,
      temp: 20.34,
      cageStatus: 0, //(0,1)open closed
      vibrate: 0, //(0,1) vibrate not vibrate
      hungry: 0 //(0,1) hungry  
      },
      { 
        case: 3,
        temp: 30.4,
        cageStatus: 0, //(0,1)
        vibrate: 0, //(0,1) 
        hungry: 0 //(0,1) 
        },
        { 
          case: 4,
          temp: 20.34,
          cageStatus: 0, //(0,1)open closed
          vibrate: 0, //(0,1) vibrate not vibrate
          hungry: 0 //(0,1) hungry  
          },
          { 
            case: 5,
            temp: 30.4,
            cageStatus: 0, //(0,1)
            vibrate: 0, //(0,1) 
            hungry: 0 //(0,1) 
            },
            { 
              case: 6,
              temp: 20.34,
              cageStatus: 0, //(0,1)open closed
              vibrate: 0, //(0,1) vibrate not vibrate
              hungry: 0 //(0,1) hungry  
              }
    
  
  ];
function App() {
  // const [image,setImage] = useState()
  // const [case, setCase] = useState()

  // const cardElements = pics.map((picture, index) => {
	// 	return (
  //   <Dashboard key={index} pic={picture} />);
	// });

  // useEffect(() => {
    // 		const interval = setInterval(() => {
    // 			axios
    // 				.get('http://localhost:3000/')
    // 				.then(function (response) {
    // 					setToilet1(response.data.result[0])
    // 					setToilet2(response.data.result[1])
    // 					setToilet3(response.data.result[2])
    // 				})
    // 		}, 2000)
    // 		return () => clearInterval(interval)
    // 	}, [])
    
    return (


      <Switch>
        <Route exact path='/dashboard/'>
          <Dashboard Cases={Cases} pics={pics} />
        </Route>
        <Route path="/dashboard/1">
          <Tigerinfo tiger={Cases[0]} picture={pics[0]}/>
        </Route>
        <Route path="/dashboard/2">
          <Tigerinfo tiger={Cases[1]} picture={pics[1]}/>
        </Route>
        <Route path="/dashboard/3">
          <Tigerinfo tiger={Cases[2]} picture={pics[2]}/>
        </Route>
        <Route path="/dashboard/4">
          <Tigerinfo tiger={Cases[3]} picture={pics[3]}/>
        </Route>
        <Route path="/dashboard/5">
          <Tigerinfo tiger={Cases[4]} picture={pics[4]}/>
        </Route>
        <Route path="/dashboard/6">
          <Tigerinfo tiger={Cases[5]} picture={pics[5]}/>
        </Route>
        <Route path="*">
          <Page404/>
        </Route>
      </Switch>
    
          
    )
}

export default App
