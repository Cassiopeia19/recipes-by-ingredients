import React from "react";
import homeHero from "../../../../assets/images/homeHero.jpg";
import Hero from '../../../../Hero'
import './Home.css'

const Home = () => {
  return (
    <>
      <Hero img={homeHero} />
      <h1 className="header">
        <center>Welcome to Reciplia!</center>
      </h1>

    </>
  );
}

export default Home;

// import React, { Component } from "react";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }
//   componentDidMount() {
//     fetch(
//       "https://api.spoonacular.com/recipes/findByIngredients?ingredients=eggs,+bacon,+chicken,+steak,+beans,+cilantro,+limes,+tortillas&number=2&apiKey=83efa03c7e5442719cbb6aa506eec37b"
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         this.setState({ items: json, isLoaded: true });
//       });
// }
//   render() {
//     if (!this.state.isLoaded) {
//       return <div>Loading...</div>;
//     } 
//     else {
//       return (
//         <>
//         <div>
//           <ul>
//             {this.state.items.map((item) => (
//               <li key={item.id}>
//                 {item.title} | <img src ={item.image} alt=""/>
//               </li>
//             ))}
//           </ul>
//         </div>
//         </>
//       );
//     }
//   }
// }

// export default Home;
