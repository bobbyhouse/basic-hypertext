import React, { useState } from 'react';
import { create } from 'basic-hypertext';

export default function Example() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    setDisplayText(create(inputText));
  };

  return (
    <div>
      <h1>Text Entry Component</h1>
      <textarea
        rows="5"
        cols="40"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here"
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      {displayText && <div>Entered Text: {displayText}</div>}
    </div>
  );
}