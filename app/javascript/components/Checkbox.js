import React from 'react';

class Checkbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      checked: e.target.checked
    });
    this.props.onChange("I am " + (e.target.checked ? "checked" : "not checked"));
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onClick={this.handleChange}/> 
        <label>{this.props.text}</label>
      </div>      
    );
  }
}

export default Checkbox;