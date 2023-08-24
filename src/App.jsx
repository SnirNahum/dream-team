import { Route, HashRouter as Router, Routes } from "react-router-dom";
import AppHeader from "./cmps/AppHeader";
import "./assets/scss/global.scss";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <section className="main-layout">
        <AppHeader />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players" element={<Players />} />
          </Routes>
        </main>

        <footer>
          <section>CoffeeRights 2023 &copy;</section>
        </footer>
      </section>
    </Router>
  );
}

export default App;
