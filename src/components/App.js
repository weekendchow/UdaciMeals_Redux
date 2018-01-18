import React, { Component } from 'react';
import { addRecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }

  componentDidMount() {
    const { store } = this.props
    store.subscribe(()=>{
      this.setState(()=>({
        calendar: store.getState()
      }))
    })
  }

  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      recipe: {
        label: this.input.value
      },
      meal: 'breakfast',
    }))

    this.input.value=''
  }

  render() {
    return (
      <div className="App">
        <input
          type='text'
          ref={(input) => this.input=input}
          placeholders="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Mondays Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
