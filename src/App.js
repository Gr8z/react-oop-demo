import React, { useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import './App.css';

const App = () => {
  const [request, setRequest] = useState({});
  const [response, setResponse] = useState({});

  return (
    <div className="App">
      <h1>React OOP Demo</h1>
      <h3>Request</h3>
      <JSONInput
        id='request'
        placeholder={request}
      />
      <h3>Response</h3>
      <JSONInput
        id='response'
        placeholder={response}
        viewOnly
      />
    </div>
  );
}

export default App;
