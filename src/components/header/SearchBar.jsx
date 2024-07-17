import { useLocation, useNavigate } from "react-router-dom";

import "./SearchBar.scss";
import queryString from "query-string";
import { useForm } from "../../hooks";

const initialFormValue = {
  search: "",
};

const formValidation = {
  search: [(value) => value.length >= 1, "Debe al menos ingresar un caracter"],
};

export const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { onInputChange, isFormValid, search } = useForm(
    initialFormValue,
    formValidation
  );

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    // navigate()
    // onReset();
  };

  return (
    <div className="searchbar">
      <form className="searchbar-form" onSubmit={onHandleSubmit}>
        <label className="hidden" htmlFor="search-input">
          Ingresá lo que quieras encontrar
        </label>
        <input
          className="searchbar-input"
          id="search-input"
          name="search"
          type="text"
          placeholder="Buscar productos, marcas y más..."
          value={search}
          onChange={onInputChange}
        />
        <button type="submit" className="searchbar-button">
          <div role="img" aria-label="Buscar" className="btn-image"></div>
        </button>
      </form>
    </div>
  );
};
