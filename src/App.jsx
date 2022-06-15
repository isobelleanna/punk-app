import "./App.scss";
import Landing from "./containers/Landing/Landing";
import Catalogue from "./containers/Catalogue/Catalogue";
import Nav from "./containers/Nav/Nav";
import Footer from "./containers/Footer/Footer";
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
    if (acidNum) {
      setBeers(data.filter((beer) => beer.ph < 4 && beer.ph !== ""));
    } else {
      setBeers(data);
    }
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

  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/main"
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
