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
      displayedWords: []
    }
    this.fetchWords = this.fetchWords.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.filterGlossary = this.filterGlossary.bind(this);
  }

  componentDidMount() {
    this.fetchWords();
  }

  fetchWords() {
    library.getGlossary()
      .then(({data}) => {
        this.setState({
          glossary: data,
          displayedWords: data
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

  filterGlossary(query) {
    const results = this.state.glossary.filter(({word}) => {
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
        <Form handleAdd={this.handleAdd}/>
        <h4>Search Component:</h4>
        <Search filterGlossary={this.filterGlossary}/>
        <h4>List Component:</h4>
        <List words={this.state.displayedWords} onClickDelete={this.handleDelete} onClickEdit={this.handleUpdate}/>
      </div>
    );
  }

};

export default App;