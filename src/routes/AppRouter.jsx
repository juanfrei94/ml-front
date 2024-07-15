import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ProductPage } from "../pages";
import { Header } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/product" element={<ProductPage />} />

        {/* Wildcard */}
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
