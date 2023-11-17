import React, { useState } from 'react';

function Testcomponent() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    // Uncheck the checkbox when the radio option changes
    setCheckboxChecked(false);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleCheckout = () => {
    if (selectedOption === null) {
      alert("Please choose a product !");
    } else if(selectedOption && !checkboxChecked){
        alert("Please check the box");
    }
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleRadioChange}
        />
        Option 1
      </div>
      <div>
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleRadioChange}
        />
        Option 2
      </div>
      {selectedOption === "option1" && (
        <div>
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
          />
          Checkbox for Option 1
        </div>
      )}
      {selectedOption === "option2" && (
        <div>
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
          />
          Checkbox for Option 2
        </div>
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Testcomponent;