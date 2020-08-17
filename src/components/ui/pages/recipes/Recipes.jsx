import React, { useState } from "react";
import "./Recipes.css";
import './Recipes.scss'
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
import recipesHero from '../../../../assets/images/recipesHero.jpg'
import Hero from '../../../../Hero'

function Recipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "13442b91";
  const APP_KEY = "dec4b748d2a17cf649a3f73e7ef064ba";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food or ingredients with such name(s).");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please enter a food or ingredient(s)");
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      <Hero img={recipesHero} />
      <div className="speech-bubble-ds">
        <p>
          <strong>Hello!</strong>
        </p>
        <p>
          Here is where you can find the recipes based upon a food name (i.e.
          'enchiladas'), or by ingredients. For ingredients, either leave a
          space or a comma in-between each one.
        </p>
        <div className="speech-bubble-ds__arrow"></div>
      </div>
      <div className="Recipes">
        <form onSubmit={onSubmit} className="search-form">
          {alert !== "" && <Alert alert={alert} />}
          <input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Enter food or ingredient(s)"
          />
          <input type="submit" value="Search" />
        </form>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>
    </>
  );
}

export default Recipes;
