import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, AdminPage, UserPage } from "./pages";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
