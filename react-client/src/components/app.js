import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import Table from './table.js';
import Form from './form.js';

class App extends Component {
  
state = {
    characters: [],
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (
      <Router>
        <div className="container">
          <h1>React Tutorial</h1>
          <p>Add a character with a name and a job to the table.</p>
          {/* <NavBar /> */}
          {/* <Route name="home" exact path="/" component={HomePage} /> */}
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <h3>Add New</h3>
          <Form handleSubmit={this.handleSubmit} />
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

export default App;
