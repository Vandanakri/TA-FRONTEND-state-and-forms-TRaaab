import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
  }
//more info
  handleButton = (props) => {
    this.setState({
      active: props.id,
    });
  };

//handle cut button
  handleHide = () => {
    this.setState({
      active: null,
    });
  };
//details
  handleDetails = (props) => {
    return (
      <>
        <div className="pop-up">
          <button
            className="hideBtn"
            onClick={() => {
              this.handleHide();
            }}
          >
            X
          </button>
          <div className="slider flex justify-between align-center flex-direction-column flex-wrap-yes">
              {this.props.details.Images.map(item=>{
                  return <>
                  <div className="img-container">
              <img className="full-width" src={item} />
            </div>
                  </>
              })}
            
          </div>
          <h3>{this.props.details.Title}</h3>
          <p>
            Type : {this.props.details.Type ? this.props.details.Type : "N/A"}
          </p>
          <p>
            Release :{" "}
            {this.props.details.Released ? this.props.details.Released : "N/A"}
          </p>
          <p>
            Genres :{" "}
            {this.props.details.Genre ? this.props.details.Genre : "N/A"}
          </p>
          <p>
            Writer :{" "}
            {this.props.details.Writer ? this.props.details.Writer : "N/A"}
          </p>
          <p>
            Director :{" "}
            {this.props.details.Director ? this.props.details.Director : "N/A"}
          </p>
          <p>
            Language :{" "}
            {this.props.details.Language ? this.props.details.Language : "N/A"}
          </p>
          <p>
            Country :{" "}
            {this.props.details.Country ? this.props.details.Country : "N/A"}
          </p>
          <p>
            Actors :{" "}
            {this.props.details.Actors ? this.props.details.Actors : "N/A"}
          </p>
          <p>
            Runtime :{" "}
            {this.props.details.Runtime ? this.props.details.Runtime : "N/A"}
          </p>
          <p style={{ fontStyle: "italic" }}>
            Plot : {this.props.details.Plot}
          </p>
        </div>
      </>
    );
  };

  render() {
    return (
      <>
        <li>
          <article>
            <div className="poster-container">
              <img className="full-width" src={this.props.details.Images}></img>
            </div>
            <h2>{this.props.details.Title}</h2>
            <div className="adj flex justify-between align-center">
              <time>{this.props.details.Released}</time>
              <button
                className="info"
                onClick={() => {
                  this.handleButton(this.props);
                }}
              >
                More Info
              </button>
            </div>
          </article>
          {this.state.active === this.props.id
            ? this.handleDetails(this.props)
            : ""}
        </li>
      </>
    );
  }
}

export default Movie;