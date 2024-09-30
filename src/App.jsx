import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ApiProvider } from "./context/apiContext";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";

function App() {
  return (
    <ApiProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ApiProvider>
  );
}

export default App;
