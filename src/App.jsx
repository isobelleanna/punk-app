import "./App.scss";
import beers from "./data/beer";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };
  const filterBySearch = beers.filter((beer) => {
    const nameLower = beer.name.toLowerCase();
    return nameLower.includes(searchTerm);
  });

  return (
    <div className="App">
      <section class="navbar">
        <Navbar handleInput={handleInput} searchTerm={searchTerm} />
      </section>
      <section class="main">
        <Main beersArr={filterBySearch} />
      </section>
    </div>
  );
}

export default App;
