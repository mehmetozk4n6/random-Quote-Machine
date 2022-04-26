import React from "react";
import { useSelector } from "react-redux";
import { changeColor } from "../redux/quoteSlice";

function Author() {
  const currentItem = useSelector((state) => state.quotes.currentItem);
  const currentColor = useSelector(changeColor);

  return (
    <div className="quote-author text-end">
      <span id="author" className={`text-${currentColor}`}>
        - {currentItem.author}
      </span>
    </div>
  );
}

export default Author;
