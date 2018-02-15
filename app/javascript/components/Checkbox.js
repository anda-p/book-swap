import React from 'react';

class Checkbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.checked);
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.checked} onChange={this.handleChange}/> 
        <label>{this.props.text}</label>
      </div>      
    );
  }
}

export default Checkbox;