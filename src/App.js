import React from 'react'
import{Timeline} from 'react-event-timeline'
import {getEvents} from './services/Events'
import Card from './components/Card'
import './App.css';

class App extends React.Component {
  state = {
    stores:[]
  }
  componentDidMount = async () => {
    const stores = await getEvents()
    if(!!stores){
      this.setState({stores})
    }
  }
  render(){
    const {stores} = this.state
    console.log(stores)
    return (
      <div className="App">
        <header className="App-header">
          <Timeline lineColor="#D5D8DF">
            <Card stores={stores}/>
          </Timeline>   
        </header>
      </div>
    );
  }
}
export default App