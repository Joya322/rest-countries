import { useState } from "react";
import "./Country.css";
const Country = ({
  country,
  handleVisitedCountry,
  handleVisitedCountriesFlags,
}) => {
  //   console.log(country);
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button className="btn" onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <br />
      <button className="btn" onClick={()=> handleVisitedCountriesFlags(country.flags.png)}>Mark Visited Flag</button>
      <br />
      <button className="btn" onClick={handleVisited}>
        {visited ? "visited" : "visit"}
      </button>

      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;
