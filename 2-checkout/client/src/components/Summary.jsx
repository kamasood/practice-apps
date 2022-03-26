import React from 'react';

function Summary({user, handleClick}) {
  return (
    <div>
      <h3>User Information</h3>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Password: {user.password}</div>
      <h3>Shipping Information</h3>
      <div>Address 1: {user.address_one}</div>
      <div>Address 2: {user.address_two}</div>
      <div>City: {user.city}</div>
      <div>State: {user.state}</div>
      <div>Zip: {user.zipcode}</div>
      <div>Phone Number: {user.phone}</div>
      <h3>Billing Information</h3>
      <div>Credit Card: {user.credit_card}</div>
      <div>Expiry Date: {user.expiration}</div>
      <div>Billing Zip: {user.billing_zip}</div>
      <button onClick={() => handleClick()}>Purchase</button>
    </div>
  );
};

export default Summary;