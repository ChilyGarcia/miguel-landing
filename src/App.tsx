import { BrowserRouter, Routes, Route } from "react-router-dom";
import MiguelPage from "./pages/Miguelpage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MiguelPage />} />
        <Route path="/miguel-hernandez" element={<MiguelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
