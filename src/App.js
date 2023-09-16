import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header";
import { FavouritesPage } from "./pages/favourites-page";
import { FilterPage } from "./pages/filter-page";
import { HomePage } from "./pages/home-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/affordable-housing/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/affordable-housing/filter-page" element={<FilterPage />} />\
          <Route
            path="/affordable-housing/favourites-page"
            element={<FavouritesPage />}
          />
          <Route path="*" element={<Navigate to="/affordable-housing/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
