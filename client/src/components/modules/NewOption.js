import React, { Component } from "react";
import { get, post } from "../../utilities";

import "./NewOption.css";
import "../../utilities.css";

/*
    props:
    this.props.addNewOption function
*/
class NewOption extends Component 
{
  constructor(props) 
  {
      super(props);

      this.state={
          content: "",
      };
  }

  handleChange = (event) =>
  {
      this.setState({
          content: event.target.value,
      });
  };

  addOption = (opt) =>
  {
    /*const body = {_id: opt._id, content: opt.content};
    post("/api/poll", body).then((option) =>
    {
        this.props.addNewOption(option);
    });*/

    this.props.addNewOption(opt);
  };

  handleSubmit = (event) =>
  {
    event.preventDefault();
    this.addOption(this.state.content);
    this.setState({
        content: "",
    });   
  };

  render() 
  {
      return (
        <div className="u-flex">
            <input
                type="text"
                placeholder={this.props.default}
                value={this.state.content}
                onChange={this.handleChange}
                className="NewOption-input"
            />    
            <button
                type="submit"
                value="Add New Option"
                onClick={this.handleSubmit}
                className="NewOption-submit u-pointer"
            > Add New Option </button>
        </div>
      );
  }
}

export default NewOption;
