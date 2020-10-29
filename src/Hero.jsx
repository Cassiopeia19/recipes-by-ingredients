import React from "react";
import styled from "styled-components";
import homeHero from "./assets/images/homeHero.jpg";

export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  position:relative;
  margin-top:100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? "80vh" : "45vh")};
  color: white;
  background:
 url(${(
      props
    ) => props.img})
    center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text@media (min-width: 768px) {
  background: url('my-hero-image.jpg') no-repeat center top;
}-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

Hero.defaultProps = {
  img: homeHero,
};
