import "./SearchBar.scss";

export const SearchBar = () => {
  return (
    <div className="searchbar">
      <form className="searchbar-form">
        <label className="hidden" htmlFor="search-input">
          Ingresá lo que quieras encontrar
        </label>
        <input
          className="searchbar-input"
          id="search-input"
          name="search"
          type="text"
          placeholder="Buscar productos, marcas y más..."
        />
        <button type="submit" className="searchbar-button">
          <div role="img" aria-label="Buscar" className="btn-image">
            
          </div>
        </button>
      </form>
    </div>
  );
};
