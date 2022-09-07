import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css'

function App() {
  return (
    <div>
      <Header id="header" title="Bryson's Portfolio."/>
			<Nav id="nav" nav='Home-About Me-Schooling-My Projects' />
			<Footer id="footer" version='V0.0.1' />
			
    </div>
  );
}

export default App;
