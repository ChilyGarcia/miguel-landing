import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MiguelPage from "./pages/Miguelpage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/miguel-hernandez" replace />} />
        <Route path="/miguel-hernandez" element={<MiguelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
