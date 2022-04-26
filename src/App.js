import "./App.css";
import Author from "./components/Author";
import NewQuote from "./components/NewQuote";
import Text from "./components/Text";
import TweetQuote from "./components/TweetQuote";
import { useSelector } from "react-redux";
import { changeColor } from "./redux/quoteSlice";

function App() {
  const currentColor = useSelector(changeColor);
  return (
    <div className={`App bg-${currentColor}`} id="wrapper">
      <div id="quote-box">
        <Text />
        <Author />
        <div className="footer">
          <TweetQuote />
          <NewQuote />
        </div>
      </div>
    </div>
  );
}

export default App;
