import './App.css';
import Bio from './components/Bio/Bio';
import Build from './components/Build/Build';
import Hero from './components/Hero/Hero';
import Match from './components/Match/Match';
import Navbar from './components/Navbar/Navbar';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Bio/>
      <Summary/>
      <Match/>
      <Build/>
    </div>
  );
}

export default App;
