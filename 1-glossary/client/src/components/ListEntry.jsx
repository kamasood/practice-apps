import React from 'react';

function ListEntry({word, onClickEdit, onClickDelete}) {
  return (
    <li>
      <div>{word.word}</div>
      <div>- {word.definition}</div>
      <button onClick={() => {onClickEdit(word)}}>Edit</button>
      <button onClick={() => {onClickDelete(word)}}>Delete</button>
    </li>
  );
}

export default ListEntry;