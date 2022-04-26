import React from "react";
import { useSelector } from "react-redux";
import { changeColor } from "../redux/quoteSlice";

function Text() {
  const currentItem = useSelector((state) => state.quotes.currentItem);
  const currentColor = useSelector(changeColor);
  return (
    <div id="text">
      <i className={`fa fa-quote-left text-${currentColor}`}>
        {currentItem.quote}
      </i>
    </div>
  );
}

export default Text;
