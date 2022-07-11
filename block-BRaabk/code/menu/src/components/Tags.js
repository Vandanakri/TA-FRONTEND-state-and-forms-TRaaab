import React from 'react';
import data from '../data.json';
import Food from './Food';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: '',
    };
  }
  handleClick = (category) => {
    this.setState({
      activeCategory: category,
    });
  };
  handleAll = () => {
    this.setState({
      activeCategory: '',
    });
  };
  render() {
    let tagName = data.map((tag) => tag.category);
    let set = new Set(tagName);
    let uniques = [...set];
    let everyFood;
    if (!this.state.activeCategory) {
      everyFood = data.reduce((acc, cv) => {
        acc = acc.concat(cv);
        return acc;
      }, []);
    } else {
      everyFood = data.filter(
        (food) => food.category === this.state.activeCategory
      );
    }
    return (
      <>
        <ul className="tags flex">
          <li className="active" onClick={this.handleAll}>
            All
          </li>
          {uniques.map((category) => (
            <li
              key={category}
              className={category === this.state.activeCategory ? 'active' : ''}
              onClick={() => this.handleClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <Food everyFood={everyFood} />
      </>
    );
  }
}

export default Tags;