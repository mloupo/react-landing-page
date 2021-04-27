import './App.scss';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Contact from "./containers/Contact/Contact"
import About from "./components/About/About"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;
