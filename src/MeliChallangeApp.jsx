import { SearchProvider } from "./context/SearchProvider";
import { AppRouter } from "./routes/AppRouter";

export const MeliChallangeApp = () => {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  );
};
