import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css'

function App() {
  return (
    <div>
      <Header title="Bryson's Portfolio."/>
			<Nav nav='About Me-Portfolio-Resume-Contact' />
			<Footer version='V0.1.1----' />
			
    </div>
  );
}

export default App;
