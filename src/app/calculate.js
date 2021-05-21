import React from "react";

function Calculate() {
  function clickHandler() {
    alert("button clicked");
  }
  return (
    <div>
      <button className="calculate_button" onClick={clickHandler}>
        Calculate
      </button>
    </div>
  );
}

export default Calculate;
