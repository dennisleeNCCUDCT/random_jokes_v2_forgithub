import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      {" "}
      <Header />
      <header className="App-header">
        <Jokes />
      </header>
      <Footer />
    </div>
  );
}

export default App;
