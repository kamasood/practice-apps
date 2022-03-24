import axios from 'axios';
import React from 'react';
import Form from './Form.jsx';
import Search from './Search.jsx';
import List from './List.jsx';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      glossary: [],
      displayedWords: []
    }
    this.filterGlossary = this.filterGlossary.bind(this);
  }

  componentDidMount() {
    this.getGlossary();
  }

  getGlossary() {
    return axios.get('http://localhost:3000/glossary') // need to fix this to env variable?
      .then(({ data }) => {
        this.setState({
          glossary: data,
          displayedWords: data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addToGlossary(word, definition) {
    const data = { word, definition }
    return axios.post('http://localhost:3000/glossary', data)
      .then((response) => {
        console.log(response); // we need to update our state and re-render when we add a word (also find a way to clear the input fields)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateGlossary(word) {
    let newDefinition = window.prompt('Update definition:', word.definition); // WORKING HERE
    // if newDefinition === null???
    console.log('ping! (edit):', newDefinition);
  }

  deleteFromGlossary(word) {
    console.log('ping! (delete)'); // WORKING HERE
  }

  filterGlossary(query) {
    const results = this.state.glossary.filter(({ word }) => {
      return word.toLowerCase().includes(query.toLowerCase());
    })
    this.setState({
      displayedWords: results
    })
  }

  render() {
    return (
      <div className="components-container">
        <h4>Form Component:</h4>
        <Form addToGlossary={this.addToGlossary}/>
        <h4>Search Component:</h4>
        <Search filterGlossary={this.filterGlossary}/>
        <h4>List Component:</h4>
        <List words={this.state.displayedWords} onClickDelete={this.deleteFromGlossary} onClickEdit={this.updateGlossary}/>
      </div>
    );
  }

};

export default App;