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
    this.onSubmitAdd = this.onSubmitAdd.bind(this);
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

  onSubmitAdd(event) {
    event.preventDefault();
    if (this.state.inputWord === '') {
      alert('Please enter a word!');
      return;
    }
    const word = {
      word: this.state.inputWord,
      definition: this.state.inputDef
    };
    this.props.handleAdd(word);
    this.setState({
      inputWord: '',
      inputDef: ''
    })
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmitAdd}>
          <input type="text" placeholder="Input word..." value={this.state.inputWord} onChange={this.onChangeWord}></input>
          <input type="text" placeholder="Input definition..." value={this.state.inputDef} onChange={this.onChangeDef}></input>
          <input type="submit" value="Add/Update"></input>
        </form>
      </div>
    );
  }

};

export default Form;