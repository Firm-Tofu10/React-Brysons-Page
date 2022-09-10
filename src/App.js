import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navlogo from "./components/Banner2.png"

function App() {
  return (
    <div>

			{ <Header title="Bryson's Portfolio."/> }
			{/* <div style={{backgroundImage: 'url(' + require('./Banner.png') + ')'}}></div>  */}
			{/* This line is here becuse i was to generate the nav bar on the image. */}
			<Footer id="about" version='V0.1.1----' />
			
			<Container id='about' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'White', height: '30vh', width: '50vh', position: 'flex',marginbottom: '2rem',justifyContent: 'center', alignItems: 'center'
      }}>
        About me!
      </Typography>
    </Container>
		<Container id='portfolio' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Wheat', height: '30vh', width: '50vh', position: 'flex',marginbottom: '2rem',justifyContent: 'center', alignItems: 'center'
      }}>
        Portfolio
      </Typography>
    </Container>
		<Container id='resume' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Grey', height: '30vh', width: '50vh', position: 'flex',marginbottom: '2rem',justifyContent: 'center', alignItems: 'center'
      }}>
        Resume
      </Typography>
    </Container>
		<Container id='contact' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Green', height: '30vh', width: '50vh', position: 'flex',marginbottom: '2rem',justifyContent: 'center', alignItems: 'center'
      }}>
        Contact
      </Typography>
    </Container>
    </div>
  );
}

export default App;
