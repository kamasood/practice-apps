import React from 'react';

function PageBar({pageNumber, totalPages, handlePage}) {
  return (
    <div>
      <button onClick={() => handlePage(pageNumber - 1)}>back</button>
      {pageNumber}
      <button onClick={() => handlePage(pageNumber + 1)}>forward</button>
    </div>
  );
}

export default PageBar;