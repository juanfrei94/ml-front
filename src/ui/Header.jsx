import { SearchBar } from "../components/header";

export const Header = () => {
  const meliImageRoute = "src/assets/images/Logo_ML.png";
  return (
    <header role="banner">
      <div className="header-container">
        <picture>
          <img src={meliImageRoute} alt="Mercado Libre logo" loading="lazy" />
        </picture>
        <SearchBar />
      </div>
    </header>
  );
};
