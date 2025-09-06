import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";
import Error from "./Error";

const CountriesDetail = () => {
  const params = useParams();
  const countryName = params.country;
  const { state } = useLocation();

  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      image: data.flags.svg,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      tld: data.tld?.join(", "),
      languages: Object.values(data.languages || {}).join(", "),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });

    // If borders exist, fetch their names in one request
    if (data.borders && data.borders.length > 0) {
      fetch(
        `https://restcountries.com/v3.1/alpha?codes=${data.borders.join(
          ","
        )}&fields=name`
      )
        .then((res) => res.json())
        .then((borderCountries) => {
          const borderNames = borderCountries.map((c) => c.name.common);
          setCountryData((prev) => ({ ...prev, borders: borderNames }));
        })
        .catch(() => {
          // if border fetch fails, keep borders empty
          setCountryData((prev) => ({ ...prev, borders: [] }));
        });
    }
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        // console.log(err);
        setError(true);
      });
  }, [countryName]);

  if (error) {
    return <Error />;
  }

  return (
    <main>
      <div className="back-icon">
        <Link onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
        </Link>
      </div>
      {countryData === null ? (
        <CountryDetailShimmer />
      ) : (
        <div className="country-card-container">
          <div className="img-container shimmer-effect">
            <img src={countryData.image} alt="" />
          </div>
          <div className="country-information">
            <h2>
              <span className="country-name-h2">{countryData.name}</span>
            </h2>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">
                  {countryData.nativeName || countryData.name}
                </span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p>
                <b>Capitals: </b>
                <span className="capitals">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Language: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            <span className="border-country">
              <b>Border Countries: &nbsp;</b>
              {countryData.borders.map((border) => (
                <Link key={border} to={`/${border}`}>
                  {border}
                </Link>
              ))}
            </span>
          </div>
        </div>
      )}
    </main>
  );
};

export default CountriesDetail;
