import React, { Component } from 'react';

export default class CategoryFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value) => {
    if (value === 'All') {
      GetCategory();
    } else {
      changeFilter(value);
      changeCategories(value);
    }

  }
  render() {
    return (
      <div>
        <select
          name="category"
          onChange={e => {
            const val = e.target.value;
            setDropDownValue(val);
            handleChange(val);
          }}
        >
          { data.categories.map(category => (
            <option key={category} value={category}>
              { category }
            </option>
          ))}
        </select>
      </div>
    )
  }
}
