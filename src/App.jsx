import "./App.scss";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [numberOfBeer, setNumberOfBeer] = useState(25);
  const [highABV, setHighABV] = useState(false);
  const [classic, setClassic] = useState(false);
  const [acidic, setAcidic] = useState(false);

  const getBeers = async (beerNumber, abvNum, classicStr, acidNum) => {
    let url = "https://api.punkapi.com/v2/beers";
    if (beerNumber) {
      url += `?page=1&per_page=${beerNumber}`;
    }
    if (abvNum) {
      url += `&abv_gt=6`;
    }
    if (classicStr) {
      url += `&brewed_before=01-2010`;
    }
    if (acidNum) {
      url += `&ph<4`;
    }
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };
  useEffect(() => {
    getBeers(numberOfBeer, highABV, classic, acidic);
  }, [numberOfBeer, highABV, classic, acidic]);

  const handleSearchInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };
  const filterBySearch = beers.filter((beer) => {
    const nameLower = beer.name.toLowerCase();
    return nameLower.includes(searchTerm);
  });
  const handleNumberChange = (event) => {
    setNumberOfBeer(event.target.value);
  };

  const handleABVChange = () => {
    setHighABV(!highABV);
  };

  const handleClassicChange = (event) => {
    setClassic(!classic);
  };

  const handleAcidicChange = (event) => {
    setAcidic(!acidic);
  };
  console.log(acidic);
  console.log(classic);
  console.log(highABV);

  return (
    <div className="app">
      <section className="app__navbar">
        <Navbar
          handleInput={handleSearchInput}
          searchTerm={searchTerm}
          label={`Beers: ${numberOfBeer}`}
          min={1}
          max={80}
          id="beer-range"
          onChange={handleNumberChange}
          value={numberOfBeer}
          onCheckboxChangeABV={handleABVChange}
          checkedABV={highABV}
          onCheckboxChangeClassic={handleClassicChange}
          checkedClassic={classic}
          onCheckboxChangeAcid={handleAcidicChange}
          checkedAcid={acidic}
        />
      </section>
      <section className="app__main">
        <Main beersArr={filterBySearch} />
      </section>
    </div>
  );
}

export default App;
