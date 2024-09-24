import Header from "./components/Header";
import Lista from "./components/Lista";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { ApiProvider } from "./context/apiContext";

function App() {
  return (
    <ApiProvider>
      <Header />
        <main>
          <Lista />
          <Content />
        </main>
      <Footer />
    </ApiProvider>
  );
}

export default App;
