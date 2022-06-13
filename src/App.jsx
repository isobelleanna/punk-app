import "./App.scss";
import beers from "./data/beer";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(
    new Array(beers.length).fill(false)
  );

  const handleSearchInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };
  const filterBySearch = beers.filter((beer) => {
    const nameLower = beer.name.toLowerCase();
    return nameLower.includes(searchTerm);
  });
  const handleCheckboxOnChange = (event) => {
    console.log(event.target.value);
    setIsChecked(!isChecked);
    if (isChecked === true) {
      return filterBySearch.filter((beer) => beer.abv > 6);
    }
  };

  console.log(isChecked);
  return (
    <div className="App">
      <section className="navbar">
        <Navbar
          handleInput={handleSearchInput}
          searchTerm={searchTerm}
          handleChange={handleCheckboxOnChange}
          checked={isChecked}
        />
      </section>
      <section className="main">
        <Main beersArr={filterBySearch} />
      </section>
    </div>
  );
}

export default App;
