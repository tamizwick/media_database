import React, { Component } from "react";
import Switch from "react-switch";
 
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.toggledOn};
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({
        checked
    });
  }
 
  render() {
    return (
      <label>
        <Switch onChange={this.handleChange} checked={this.state.checked} onColor='#0f8b8d' height={16} width={46} />
      </label>
    );
  }
}

export default Toggle;