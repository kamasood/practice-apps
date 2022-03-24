import React from 'react';
import ListEntry from './ListEntry.jsx';

function List({words, onClickEdit, onClickDelete}) {
  return (
    <ul>
      {words.map((word) => (
        <ListEntry
          key={word.word}
          word={word}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete} />
      ))}
    </ul>
  );
};

export default List;