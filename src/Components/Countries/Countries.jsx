import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedCountriesFlags, setVisitedCountriesFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    // console.log("add this");
    // console.log(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedCountriesFlags = (flag) => {
    const newVisitedCountriesFlag = [...visitedCountriesFlags, flag];
    setVisitedCountriesFlags(newVisitedCountriesFlag);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited countries */}
      <div>
        <h5>Visited countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      {/* display flags */}
      <div className="flag-container">
        {
          visitedCountriesFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
        }
      </div>

      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedCountriesFlags={handleVisitedCountriesFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
