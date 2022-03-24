import axios from 'axios';
import React from 'react';
import Form from './Form.jsx';
import Search from './Search.jsx';
import List from './List.jsx';
import library from '../library'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      glossary: [],
      searchResult: [],
      searched: false
    }
    this.fetchWords = this.fetchWords.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReturnHome = this.handleReturnHome.bind(this);
    this.filterGlossary = this.filterGlossary.bind(this);
  }

  componentDidMount() {
    this.fetchWords();
  }

  fetchWords() {
    library.getGlossary()
      .then(({data}) => {
        this.setState({
          glossary: data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleAdd(word) {
    library.addToGlossary(word)
      .then(() => {
        this.fetchWords();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleUpdate({word, definition}) {
    const updated = window.prompt('Update definition:', definition);
    if (updated) {
      library.updateGlossary({word, definition: updated})
        .then(() => {
          this.fetchWords();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  handleDelete(word) {
    library.deleteFromGlossary(word)
      .then(() => {
        this.fetchWords();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleReturnHome() {
    this.setState({
      searched: false
    });
  }

  filterGlossary(query) {
    const results = this.state.glossary.filter((entry) => {
      return (entry.word.toLowerCase().includes(query.toLowerCase()) || entry.definition.toLowerCase().includes(query.toLowerCase()));
    })
    this.setState({
      searchResult: results,
      searched: true
    })
  }

  render() {
    const listWords = this.state.searched === false ? this.state.glossary : this.state.searchResult;

    return (
      <div className="components-container">
        <button onClick={this.handleReturnHome}>Home</button>
        <h4>Form Component:</h4>
        <Form handleAdd={this.handleAdd}/>
        <h4>Search Component:</h4>
        <Search filterGlossary={this.filterGlossary}/>
        <h4>List Component:</h4>
        <List words={listWords} onClickDelete={this.handleDelete} onClickEdit={this.handleUpdate}/>
      </div>
    );
  }

};

export default App;