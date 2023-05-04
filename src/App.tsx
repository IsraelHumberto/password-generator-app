import InputRange from 'components/InputRange';
import React from 'react';

function App() {
  return (
    <InputRange
      min={0}
      max={20}
      title='Character Length'
    />
  );
}

export default App;
