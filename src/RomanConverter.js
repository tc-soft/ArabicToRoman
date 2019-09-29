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
      event.target.value = null;
      this.setState({ roman: null });
    }
  };

  render() {
    return (
      <>
        <div class="flex">
          <div class="flex__itemToCenter">
            <h2>Convert arabic to roman</h2>
            <p>Enter value from 1 to 999</p>
          </div>
        </div>

        <div class="flex">
          <div class="flex__itemToRight">
            <p>Arabic :</p>
            <p>Roman :</p>
          </div>

          <div class="flex__itemToLeft">
            <input onChange={this.handleChange} type="number" />
            <p class="output">{this.state.roman ? this.state.roman : null}</p>
          </div>
        </div>
      </>
    );
  }
}

export default RomanConverter;
