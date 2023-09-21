import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LoginPage, AdminPage, UserPage } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
