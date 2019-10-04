import React from "react";
import { arabicToRoman } from "./ArabicToRoman";
import "./RomanConverter.css";

class RomanConverter extends React.Component {
  state = {
    roman: null
  };

  handleChange = event => {
    const arabic = parseInt(event.target.value, 10);

    if (event.target.value > 0 && event.target.value < 999) {
      this.setState({ roman: arabicToRoman(arabic) });
    } else if (event.target.value <= 0 || event.target.value > 999) {
      alert("Value is out of range");
      event.target.value = null;
      this.setState({ roman: null });
    }
  };

  render() {
    return (
      <>
        <div className="flex">
          <div className="flex__item flex__item--toCenter">
            <h2>Convert arabic to roman</h2>
            <p>Enter value from 1 to 999</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex__item flex__item--toRight">
            <p data-testid="labelArabic">Arabic :</p>
            <p data-testid="labelRoman">Roman :</p>
          </div>
          <div className="flex__item flex__item--toLeft">
            <input
              onChange={this.handleChange}
              type="number"
              data-testid="inputArabic"
            />
            <p className="output" data-testid="outputRoman">
              {this.state.roman ? this.state.roman : null}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default RomanConverter;
