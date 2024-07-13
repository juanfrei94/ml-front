import { SearchContext } from "./SearchContext";

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
  const test = "Context";
  return (
    <SearchContext.Provider value={{ test }}>{children}</SearchContext.Provider>
  );
};
