import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css'

function App() {
  return (
    <div>
      <Header title="Bryson's Portfolio."/>
			<Nav nav='Home-About Me-Schooling-My Projects' />
			<Footer version='V0.0.5' />
			
    </div>
  );
}

export default App;
