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
`;

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  main {
    position: relative;
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 10px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      width: ${breakpoints.mobile};
      height: 90vh;
    }
  }
`;
