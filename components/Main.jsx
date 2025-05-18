import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import SearchContainer from "./SearchContainer";
import CountryCardListShimmer from "./CountryCardListShimmer";

export default function Main() {
  const [query, setQuery] = useState("");
  const [countryDataList, setCountryDataList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryDataList(data);
      });
  }, []);

  return (
    <>
      <main>
        <SearchContainer setQuery={setQuery} />
        {countryDataList.length === 0 ? (
          <CountryCardListShimmer />
        ) : (
          <div className="countries-card-container">
            {countryDataList
              .filter((country) =>
                country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
              )
              .map((country) => {
                return (
                  <CountriesCard
                    query={query}
                    key={country.name.common}
                    flag={country.flags.svg}
                    countryName={country.name.common}
                    population={country.population.toLocaleString("en-IN")}
                    region={country.region}
                    tld={country.capital?.[0]}
                    data={country}
                  />
                );
              })}
          </div>
        )}
      </main>
    </>
  );
}
