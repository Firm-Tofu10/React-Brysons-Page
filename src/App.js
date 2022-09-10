import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <Header title="Bryson's Portfolio."/>
			<Nav nav='About Me-Portfolio-Resume-Contact' />
			<Footer version='V0.1.1----' />
			
			<Container id='about' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'White', height: '30vh', width: '50vh', position: 'flex',marginbottom: '2rem',justifyContent: 'center', alignItems: 'center'
      }}>
        About me!
      </Typography>
    </Container>
		<Container id='portfolio' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Wheat', height: '30vh', width: '50vh'
      }}>
        Portfolio
      </Typography>
    </Container>
		<Container id='resume' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Grey', height: '30vh', width: '50vh' 
      }}>
        Resume
      </Typography>
    </Container>
		<Container id='contact' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Green', height: '30vh', width: '50vh'
      }}>
        Contact
      </Typography>
    </Container>
    </div>
  );
}

export default App;
