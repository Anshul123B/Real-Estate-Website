import Hero from "./components/Hero/Hero";
import Header from "./Header/Header";
import "./App.css";
import Companies from "./components/Companies/Companies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
    </div>
  );
}

export default App;
