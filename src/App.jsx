import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import DetailPage from "./components/Pages/DetailPage";
import Register from "./components/Pages/Auth/Register";
import Login from "./components/Pages/Auth/Login";
import Card from "./components/Card";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
