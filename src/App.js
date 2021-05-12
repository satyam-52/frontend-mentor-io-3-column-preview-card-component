/**@jsxRuntime classic*/
/**@jsx jsx*/

import { css, jsx } from "@emotion/react";
import orange from "./images/icon-sedans.svg";
import cyan from "./images/icon-suvs.svg";
import darkCyan from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="container" css={CSS}>
      <div className="cards__container">
        <div className="card orange">
          <img src={orange} alt="" />
          <h1>Sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="button--orange">Learn More</button>
        </div>
        <div className="card cyan">
          <img src={cyan} alt="" />
          <h1>Suvs</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="button--cyan">Learn More</button>
        </div>
        <div className="card darkCyan">
          <img src={darkCyan} alt="" />
          <h1>Luxury</h1>
          <p>
            {" "}
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="button--darkCyan">Learn More</button>
        </div>
      </div>
    </div>
  );
}

const CSS = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px) {
    height: 100%;
  }

  .cards__container {
    display: flex;
    width: 900px;
    height: 450px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 750px) {
      flex-direction: column;
      height: 100%;
      width: fit-content;
      align-items: center;
      margin: 100px 0;
      border: 1px solid-black;
    }

    .orange {
      background-color: var(--color-primary-do);
    }

    .cyan {
      background-color: var(--color-primary-dc);
    }

    .darkCyan {
      background-color: var(--color-primary-vdc);
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 50px;

      @media screen and (max-width: 750px) {
        height: 400px;
        width: 400px;

        .button--orange {
          color: var(--color-primary-do) !important;
        }

        .button--cyan {
          color: var(--color-primary-dc);
        }

        .button--darkCyan {
          color: var(--color-primary-vdc);
        }
      }

      img {
        width: 75px;
        margin-bottom: 25px;
      }

      h1 {
        color: var(--color-bhb);
        font-family: "Big Shoulders Display", sans-serif;
        text-transform: uppercase;
        font-size: 38px;
        margin-bottom: 25px;
      }

      p {
        color: var(--color-paragraph);
        font-family: "Lexend Deca", sans-serif;
      }

      button {
        position: absolute;
        bottom: 50px;
        font-family: "Lexend Deca", sans-serif;
        background-color: transparent;
        border: 1px solid var(--color-bhb);
        padding: 10px 20px;
        border-radius: 100vh;
        color: var(--color-bhb);
        cursor: pointer;

        @media screen and (max-width: 750px) {
          position: initial;
          margin-top: 25px;
          width: 200px;
          background-color: var(--color-bhb);
        }
      }
    }
  }
`;

export default App;
