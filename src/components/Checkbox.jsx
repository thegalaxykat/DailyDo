import { useState } from "react";

function Checkbox({ checked }) {
  return (
      <div className="checkbox-wrapper-12">
        <div className="cbx">
          <input id="cbx-12" type="checkbox" />
          <label htmlFor="cbx-12"></label>
          <svg width="10" height="12" viewBox="0 0 12 11" fill="none">
            <path d="M2 8.36364L6.23077 12L13 2"></path>
          </svg>
        </div>
        {/* Gooey*/}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo-12">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="4"
                result="blur"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                result="goo-12"
              ></feColorMatrix>
              <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
  );
}

export default Checkbox;
