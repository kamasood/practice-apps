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

    this.props.handleSearch(this.state.inputSearch);

    this.setState({
      inputSearch: ''
    });
  }

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.onSubmitSearch}>
          <input
            type="text"
            placeholder="Search glossary..."
            value={this.state.inputSearch}
            onChange={this.onChangeSearch}>
          </input>
          <input
            type="submit"
            value="Search">
          </input>
        </form>
      </div>
    );
  }

};

export default Search;