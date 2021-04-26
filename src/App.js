import './App.scss';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Contact from "./containers/Contact/Contact"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Contact />
    </div>
  );
}

export default App;
