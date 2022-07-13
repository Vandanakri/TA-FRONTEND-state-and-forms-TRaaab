import React from 'react';
import FormValidation from './FormValidation';
import InputElement from './InputValidation'

class App extends React.Component {
  render() {
    return (
      <>
        <FormValidation />
        <InputElement />
      </>
    );
  }
}

export default App;