import React from 'react';

class FontTester extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.ref1 = React.createRef();
    this.state = {
      text: 'Lorem Ipsum Dolor Sit Amet...',
      fontSize: 16,
    };
  }

  handleChange = () => {
    this.setState({
      text: this.ref.current.value,
    });
  };

  handleRange = () => {
    this.setState({
      fontSize: this.ref1.current.value,
    });
  };

  render() {
    let fonts = [
      'Azeret Mono',
      'Glory',
      'Lato',
      'Montserrat',
      'Noto Sans',
      'Noto SansJP',
      'Open Sans',
      'Poppins',
      'Roboto',
      'Urbanist',
    ];
    return (
      <section className='container'>
        <div className='main'>
          <input className='input'
            onChange={this.handleChange}
            ref={this.ref}
            type="text"
            placeholder="Enter the text"
          ></input>

          <small>{this.state.fontSize}px</small>
          <input
            onChange={this.handleRange}
            ref={this.ref1}
            type="range"
          />
          <label for="fontsize">Font Size </label>
        </div>

        <ul>
          {fonts.map((font) => {
            return (
              <div >
              <li className='box'>
                <h2>{font}</h2>
                <h3
                  style={{
                    fontFamily: font,
                    fontSize: this.state.fontSize + 'px',
                  }}
                >
                  {this.state.text ? this.state.text : ''}
                </h3>
              </li>
              </div>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default FontTester;