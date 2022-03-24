import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputSearch: ''
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onChangeSearch(event) {
    this.setState({
      inputSearch: event.target.value
    })
  }

  onSubmitSearch(event) {
    event.preventDefault()
    this.props.filterGlossary(this.state.inputSearch);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitSearch}>
        <input type="text" placeholder="Search glossary..." onChange={this.onChangeSearch}></input>
        <input type="submit" value="Search"></input>
      </form>
    );
  }

};

export default Search;