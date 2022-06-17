import "./App.scss";
import Landing from "./containers/Landing/Landing";
import Catalogue from "./containers/Catalogue/Catalogue";
import Nav from "./containers/Nav/Nav";
import Footer from "./containers/Footer/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomBeer from "./containers/RandomBeer/RandomBeer";
import TasterMenu from "./containers/TasterMenu/TasterMenu";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [numberOfBeer, setNumberOfBeer] = useState(25);
  const [highABV, setHighABV] = useState(false);
  const [classic, setClassic] = useState(false);
  const [acidic, setAcidic] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [randomBeer, setRandomBeer] = useState([]);

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
    const res = await fetch(url);
    const data = await res.json();

    if (acidNum) {
      setBeers(data.filter((beer) => beer.ph < 4 && beer.ph !== null));
    } else {
      setBeers(data);
    }
  };
  const getRandomBeer = async () => {
    const url = "https://api.punkapi.com/v2/beers/random";
    const res = await fetch(url);
    const data = await res.json();
    setRandomBeer(data);
  };

  useEffect(() => {
    getBeers(numberOfBeer, highABV, classic, acidic);
    getRandomBeer();
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

  const handleClassicChange = () => {
    setClassic(!classic);
  };

  const handleAcidicChange = () => {
    setAcidic(!acidic);
  };

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <Router>
      <div className="app">
        <Nav handleMenuToggle={handleMenuToggle} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/punk-app/" element={<Landing />}></Route>
          <Route
            path="/punk-app/random"
            element={<RandomBeer randomBeer={randomBeer} />}
          ></Route>
          <Route
            path="/punk-app/taster-menu"
            element={<TasterMenu beers={beers} />}
          ></Route>
          <Route
            path="/punk-app/main"
            element={
              <Catalogue
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
                beersArr={filterBySearch}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
