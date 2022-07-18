import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      email: '',
      checkbox1: '',
      checkbox2: '',
      checkbox3: '',
      checkbox4: '',
      firstname: '',
      lastname: '',
      date: '',
      address: '',
      message: '',
    };
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstname, lastname, date } = this.state;
    alert(`Your registration detail: \n
               Email: ${email} \n
               Firstname: ${firstname} \n
               Lastname: ${lastname} \n
               Date Of Birth: ${date}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };


  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          type='button'
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button'
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <h1>Multi Step Form</h1>
        <h3>Step {this.state.currentStep} </h3>

        <form onSubmit={this.handleSubmit}>

          <Form1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            date={this.state.date}
            address={this.state.address}
          />
          <Form2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
            checkpoint1={this.state.checkpoint1}
            checkpoint2={this.state.checkpoint2}
          />
          <Form3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
            checkpoint3={this.state.checkpoint3}
            checkpoint4={this.state.checkpoint4}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </>
    );
  }
}
export default Parent;