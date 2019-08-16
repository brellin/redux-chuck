import React from 'react'
import { connect } from 'react-redux'

import { getJoke } from './actions'
import './App.css'

function App(props) {

  console.log("app props", props)

  if (!props.gotten) return (
    <div className="App">
      <header className="App-header">
        <button onClick={props.getJoke}>Get New Joke</button>
      </header>
    </div>
  )

  else return (
    <div className="App">
      <header className="App-header">
        <h1>{props.joke}</h1>
        <button onClick={props.getJoke}>Get New Joke</button>
      </header>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    joke: state.joke,
    gotten: state.gotten
  }
}

export default connect(mapStateToProps, { getJoke })(App)
