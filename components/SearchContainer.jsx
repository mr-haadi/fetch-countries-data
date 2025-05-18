export default function SearchContainer({ setQuery }) {
  return (
    <div className="search-and-filter-container">
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          placeholder="Search for a country..."
           onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="filter-box">
        <select
          className="filter-by-region"  onChange={(e) => setQuery(e.target.value.toLowerCase())}>
          <option hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
