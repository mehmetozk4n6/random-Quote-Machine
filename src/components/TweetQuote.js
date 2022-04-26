import React from "react";
import { useSelector } from "react-redux";
import { changeColor } from "../redux/quoteSlice";

function TweetQuote() {
  const currentColor = useSelector(changeColor);
  return (
    <a
      className={`button bg-${currentColor} p-1`}
      href="twitter.com/intent/tweet"
      id="tweet-quote"
      title="Tweet this quote!"
      target="_top"
    >
      <i className="fa fa-twitter text-white"></i>
    </a>
  );
}

export default TweetQuote;
