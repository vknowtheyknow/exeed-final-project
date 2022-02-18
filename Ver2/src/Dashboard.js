import React from 'react'
import ElementDashboard from './ElementDashboard'
function Dashboard(props) {
    const {Cases,pics} = props;
  return (
      <div className="App">
			      <header className="App-header">
				      <h1>Tiger friends</h1>
              <h1>เพื่อนเสือ</h1>
              <div className="pos">
                <ElementDashboard tiger={Cases[0]} picture={pics[0]}/>
                <ElementDashboard tiger={Cases[1]} picture={pics[1]}/>
                <ElementDashboard tiger={Cases[2]} picture={pics[2]}/>
              </div>
              <div className="pos">  
                <ElementDashboard tiger={Cases[3]} picture={pics[3]}/>
                <ElementDashboard tiger={Cases[4]} picture={pics[4]}/>
                <ElementDashboard tiger={Cases[5]} picture={pics[5]}/>
              </div>
            </header>
          </div>  
    
  )
}

export default Dashboard