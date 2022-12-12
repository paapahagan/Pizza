import Body from "./component/Body";
import Nav from "./component/Nav";
import "./App.css";
import Categories from "./component/Categories";
import Ship from "./component/Ship";
import Outlet from "./component/Outlet";
import AdOne from "./component/AdOne";
import Team from "./component/Team";
import AdTwo from "./component/AdTwo";
import Logos from "./component/Logos";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <Categories />
      <Ship />
      <Outlet />
      <AdOne />
      <Team />
      <AdTwo />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
