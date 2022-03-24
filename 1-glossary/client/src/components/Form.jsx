import React from 'react'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputWord: '',
      inputDef: ''
    };
    this.onChangeWord = this.onChangeWord.bind(this);
    this.onChangeDef = this.onChangeDef.bind(this);
    this.onSubmitEntry = this.onSubmitEntry.bind(this);
  }

  onChangeWord(event) {
    this.setState({
      inputWord: event.target.value
    })
  }

  onChangeDef(event) {
    this.setState({
      inputDef: event.target.value
    })
  }

  onSubmitEntry(event) {
    event.preventDefault();
    this.props.addToGlossary(this.state.inputWord, this.state.inputDef);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEntry}>
        <input type="text" placeholder="Input word..." onChange={this.onChangeWord}></input>
        <input type="text" placeholder="Input definition..." onChange={this.onChangeDef}></input>
        <input type="submit" value="Add/Update"></input>
      </form>
    );
  }

};

export default Form;