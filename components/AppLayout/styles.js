import css from "styled-jsx/css";
import { fonts, colors, breakpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, transparent 1px),
      radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
  textarea,
  input {
    font-family: ${fonts.base};
  }
`;

export default css`
  div {
    display: grid;
    place-items: center;
  }
  main {
    display: flex;
    flex-direction: column;
    position: relative;
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    min-height: 98%;
    width: 480px;
    padding: 0 10px;
  }
  section {
    height: 50px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: fixed;
    bottom: 0;
    padding: 10px;
    margin-left: 50px;
    margin-bottom: 50px;
    border-radius: 5px;
    background-color: orange;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      width: ${breakpoints.mobile};
      height: 98vh;
      margin-top: 0;
    }
  }
  @media (max-width: 1230px) {
    section {
      display: none;
    }
  }
`;
