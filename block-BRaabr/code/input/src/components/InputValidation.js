import React from "react";

class InputElement extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            text: '',
            date: '',
            textarea: '',
        };
    }
    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({ [name]: value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.text, this.state.date, this.state.textarea);
        alert(this.fileInput.current.files[0].name);
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Input Element</h1>
                <label htmlFor="text">Text Input</label>
                <input type="text" onChange={this.handleInput} name="text" id="text" value={this.state.text}></input>

                <label htmlFor="date">Date Input</label>
                <input type="date" onChange={this.handleInput} name="date" id="date" value={this.state.date}></input>

                <label htmlFor="file">File Input</label>
                <input type="file" className="file" ref={this.fileInput}></input>

                <label htmlFor="readonly">Read-Only Input</label>
                <input type="text" id="readOnly" readOnly={true}></input>

                <label htmlFor="disable">Disabled Input</label>
                <input type="text" id="readonly" disabled={true}></input>

                <label htmlFor="textarea">Textarea</label>
                <textarea onChange={this.handleInput} name="textarea" id="textarea" value={this.state.textarea}></textarea>

                <label htmlFor="textarea">Textarea Disabled</label>
                <textarea onChange={this.handleInput} id="textarea1" disabled={true}></textarea>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default InputElement;