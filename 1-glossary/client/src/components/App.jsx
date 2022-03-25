import axios from 'axios';
import React from 'react';
import Form from './Form.jsx';
import Search from './Search.jsx';
import List from './List.jsx';
import PageBar from './PageBar.jsx';
import library from '../library'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      glossary: [],
      searched: null,
      pageNumber: 1,
      totalPages: 1
    }
    this.countWords = this.countWords.bind(this);
    this.fetchWords = this.fetchWords.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReturnHome = this.handleReturnHome.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchWords();
  }

  countWords(search) {
    library.countGlossary(search)
      .then(({data}) => {
        this.setState({
          totalPages: Math.ceil(data.count / 10)
        });
      });
  }

  fetchWords(page = this.state.pageNumber, search = this.state.searched) {
    this.countWords(search);
    library.getGlossary(page, search)
      .then(({data}) => {
        this.setState({
          glossary: data,
          pageNumber: page,
          searched: search
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
      searched: null,
    })
    this.fetchWords(1, null); // this kind of works...
  }

  handlePage(page) {
    if (page < 1 || page > this.state.totalPages) {
      return;
    } else {
      this.fetchWords(page);
    }
  }

  handleSearch(search) {
    this.fetchWords(1, search);
  }

  render() {
    return (
      <div className="components-container">
        <button onClick={this.handleReturnHome}>Home</button>
        <h4>Form Component:</h4>
        <Form handleAdd={this.handleAdd}/>
        <h4>Search Component:</h4>
        <Search handleSearch={this.handleSearch}/>
        <h4>Page Bar Component:</h4>
        <PageBar handlePage= {this.handlePage} pageNumber={this.state.pageNumber} totalPages={this.state.totalPages}/>
        <h4>List Component:</h4>
        <List words={this.state.glossary} onClickDelete={this.handleDelete} onClickEdit={this.handleUpdate}/>
      </div>
    );
  }

};

export default App;