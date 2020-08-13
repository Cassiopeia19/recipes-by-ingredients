import React from "react";
import recipesHero from "../../../../assets/images/recipesHero.jpg";
import Hero from "../../../../Hero";
import ReactDOM from "react-dom";
import "./Recipes.css";

class Recipes extends React.Component {
  defaultState = {  };
  constructor(props) {
    super(props);
    this.state = {
             ingredients: ''
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("ingredients submitted: " + this.state.value);
    event.preventDefault();
    this.setState({ value: "" });
  }

  render() {
    return (
      <>
        <Hero img={recipesHero} />
        <body>
          <p>Enter ingredients...</p>
          <form onSubmit={this.handleSubmit}>
            <textarea
              rows="10"
              cols="30"
              type="text"
              ref="form"
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
            <button
              onClick={this.handleClick}
              >Search
            </button>

            {/* <Button
             
              type="reset"
              theme={"secondary"}
              title={"reset"}
              style={{
                margin: "10px 10px 10px 10px",
                backgroundColor: "pink",
                color: "black",
              }}
            /> */}
          </form>
        </body>
      </>
    );
  }
}
ReactDOM.render(<Recipes />, document.getElementById("root"));
export default Recipes;
