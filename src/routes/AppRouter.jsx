import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ItemsPage } from "../pages";
import { Layout } from "../ui";
import { ItemDetail } from "../components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Route>

      {/* Wildcard */}
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
