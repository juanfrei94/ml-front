import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ProductPage } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/product" element={<ProductPage />} />

        {/* Wildcard */}
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
