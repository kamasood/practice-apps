import React from 'react';

function Home({handleClick}) {
  return (
    <div>
      <button onClick={() => handleClick()}>Checkout</button>
    </div>
  );
};

export default Home;