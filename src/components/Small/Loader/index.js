import React, { useEffect } from "react";
import "./loader.css";
const LoaderCSS = ({ titleColor, textColor }) => {
  useEffect(() => {
    const elementsEven = document.querySelectorAll(
      ".loader > span:nth-child(even)"
    );
    const elementsOdd = document.querySelectorAll(
      ".loader > span:nth-child(odd)"
    );
    elementsEven.forEach((element) => {
      element.style = `color: ${titleColor}`;
    });
    elementsOdd.forEach((element) => {
      element.style = `color: ${textColor}`;
    });
  }, [titleColor, textColor]);
  return (
    <div className="loader">
      <span>L</span>
      <span>E</span>
      <span>&nbsp;</span>
      <span>S</span>
      <span>O</span>
      <span>F</span>
      <span>T</span>
    </div>
  );
};

export default LoaderCSS;
