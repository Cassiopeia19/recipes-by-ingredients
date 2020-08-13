import React from "react";
import recipesHero from "../../../../assets/images/recipesHero.jpg";
import Hero from "../../../../Hero";
import ReactDOM from "react-dom";
import './Recipes.css'
// import {TextField} from '@material-ui/core'

class Recipes extends React.Component {
     constructor(props) {
        super(props);
         this.state = {
             ingredients: ''
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('ingredients submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      // style={{ float: "left" }}
      <>
        <Hero img={recipesHero} />
        <body>
          <p>Enter ingredients...</p>
          <form onSubmit={this.handleSubmit}>
            <textarea
              rows="10"
              cols="30"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Separate your ingredients by commas"
            />
            <p />
            {/* <TextField
            type="text"
            value={this.state.value} 
            onChange={this.handleChange} />
            placeholder="# of recipes to display"
            style={{ width: 200 }}
          /> */}
            <input type="submit" value="Submit" />
          </form>
        </body>
      </>
    );
  }
}

ReactDOM.render(<Recipes />, document.getElementById("root"));

export default Recipes;
