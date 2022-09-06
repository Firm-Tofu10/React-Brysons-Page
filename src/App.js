import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Header title="Bryson's Portfolio."/>
			<div Nav='Home-About Me-Schooling-My Projects' />
			<Footer version='V0.0.1' />
    </div>
  );
}

export default App;
