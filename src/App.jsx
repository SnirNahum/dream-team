import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { ContactIndex } from "./pages/ContactIndex";
import About from "./cmps/About/About";
import AppHeader from "./cmps/AppHeader";
import { ContactDetails } from "./pages/ContactDetails";
import Team from "./cmps/About/Team";
import Vision from "./cmps/About/Vision";
import ContactEdit from "./pages/ContactEdit";
import "./assets/scss/global.scss";
import { Charts } from "./pages/Charts";

function App() {
  return (
    <Router>
      <section>
        <AppHeader />
        <main className="container">
          <Routes>
            <Route path="/" element={<ContactIndex />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/about" element={<About />}>
              <Route path="team" element={<Team />} />
              <Route path="vision" element={<Vision />} />
              <Route />
            </Route>
            <Route path="/charts" element={<Charts />} />
            <Route path="contact/edit/:id?" element={<ContactEdit />} />
          </Routes>
        </main>

        <footer>
          <section className="container">CoffeeRights 2023 &copy;</section>
        </footer>
      </section>
    </Router>
  );
}

export default App;
