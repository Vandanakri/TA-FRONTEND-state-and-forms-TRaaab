import faqs from '../data.json';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }
  render() {
    return (
      <>
        <h1>Welcome to FAQ</h1>
        <ul className='display'>
          {faqs.map((faq, index) => (
            <li className='que'>
            
              <h2
                onClick={() => {
                  this.setState({
                    activeIndex:
                      this.state.activeIndex === index ? null : index,
                  });
                }}
              > 
                {faq.Q} {this.state.activeIndex === index ? '👆🏾' : '👇🏻'}
              </h2 >
              
              {index === this.state.activeIndex && <p>{faq.A}</p>}
              <ul/>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;


