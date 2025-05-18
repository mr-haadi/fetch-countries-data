import { Link } from "react-router-dom";

export default function CountriesCard({
  flag,
  countryName,
  population,
  region,
  tld,
  data
}) {
  
  return (
    <Link className="country-card" to={`./${countryName}`} state={data} >
      <div className="flag-container">
        <img src={flag} alt={countryName + " Flag"} />
      </div>
      <div className="card-text">
        <h3>{countryName}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {tld}
        </p>
      </div>
    </Link>
  );
}
