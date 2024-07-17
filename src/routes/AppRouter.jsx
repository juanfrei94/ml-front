import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ProductPage } from "../pages";
import { Layout } from "../ui";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>

      {/* Wildcard */}
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
