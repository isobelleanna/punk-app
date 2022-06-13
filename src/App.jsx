import "./App.scss";
import beers from "./data/beer";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

function App() {
  console.log(beers);
  return (
    <div className="App">
      <Navbar />
      <Main beersArr={beers} />
    </div>
  );
}

export default App;
