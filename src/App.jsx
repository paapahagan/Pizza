import Body from "./component/Body";
import Nav from "./component/Nav";
import "./App.css";
import Categories from "./component/Categories";

function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <Categories />
    </div>
  );
}

export default App;
