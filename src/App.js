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
        <h3>About Me</h3>
						Hello, my name is Bryson Benson I am 24 years old Full Stack Web Developer, I recently graduated from the
							University Of Utah via there coding boot camp. Some of my hobbies outside of work consist of Rock Climbing
							and Video Games. Being from Salt Lake there is plenty of climbing locally and this gives me to the
							opportunity to explore and climb rocks. I also really injoy working with and learning from other people.
      </Typography>
    </Container>
		<Container id='portfolio' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Wheat', height: '30vh', width: '50vh', position: 'flex',marginbottom: '2rem',justifyContent: 'center', alignItems: 'center'
      }}>
        <h3>Portfolio</h3><li>Day Planer: <a
									href="https://github.com/Firm-Tofu10/Day-Planer">https://github.com/Firm-Tofu10/Day-Planer</a></li>
							<li>Movie Blog: <a
									href="https://github.com/Firm-Tofu10/MovieClub">https://github.com/Firm-Tofu10/MovieClub</a>
							</li>
							<li>ReadMeGen: <a
									herf="https://github.com/Firm-Tofu10/ReadMe-Gen">https://github.com/Firm-Tofu10/ReadMe-Gen</a>
							</li>
							<li>MyTeamGen: <a
									herf="https://github.com/Firm-Tofu10/MyTeamGen">https://github.com/Firm-Tofu10/MyTeamGen</a>
							</li>
							<li>EmployeeDataBase: <a
									href="https://github.com/Firm-Tofu10/EmployeeDataBase">https://github.com/Firm-Tofu10/EmployeeDataBase</a>
							</li>
							<li>Weather App: <a
									href="https://github.com/Firm-Tofu10/Weather-App">https://github.com/Firm-Tofu10/Weather-App</a></li>
							<li>Function Breakdown: <a
										href="https://github.com/Firm-Tofu10/FunctionBreakDown">https://github.com/Firm-Tofu10/FunctionBreakDown</a></li>
							<h2 class="mb-0 text-primary">Deployed Projects</h2>
							<li>Day Planer: <a
									href="https://note-backend-test.herokuapp.com/">https://note-backend-test.herokuapp.com/</a>
							</li>
							<li>Movie Blog: <a
									href="https://movieclub3.herokuapp.com/login">https://movieclub3.herokuapp.com/login</a></li>
							<li>Weather-App <a
									href="https://firm-tofu10.github.io/Weather-App/">https://firm-tofu10.github.io/Weather-App/</a></li>
							<li>Password Generator<a
										href="https://firm-tofu10.github.io/Weather-App/">https://firm-tofu10.github.io/PasswordGenerator/</a></li>
      </Typography>
    </Container>
		<Container id='resume' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Grey', height: '30vh', width: '50vh', position: 'flex',marginbottom: '2rem',justifyContent: 'center', alignItems: 'center'
      }}>
        <h3>Resume</h3>I graduated from University of Utah coding boot camp, the boot camp was a great
									experience mostly because I have been trying to learn how to code since high school. This gave me some
									much needed structure and the opportunity to learn from and meet like minded people. I also got to
									experience to see how much there is to learn which is very exciting because i'm the kind of person
									that becomes bored when there is nothing else to learn or improve at. I would highly recommend this
									program for anyone that need the structure to learn how to code.
				<h3>Link to resume.</h3>
      </Typography>
    </Container>
		<Container id='contact' maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Green', height: '30vh', width: '50vh', position: 'flex',marginbottom: '2rem',justifyContent: 'center', alignItems: 'center'
      }}>
        <h3>Contact</h3>
						<ul class="list-unstyled mb-4">
						<li class="mb-3"><a href="#!"><i
									class="far fa-envelope display-25 me-3 text-secondary"></i>bryonnbenson10@gmail.com</a></li>
						<li class="mb-3"><a href="#!"><i
									class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>385-770-0203</a></li>
						<li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>Salt Lake City, UT</a>
						</li>
						<li>GitHub:<a href="https://github.com/Firm-Tofu10">https://github.com/Firm-Tofu10</a></li>
						<li>Linkedin:<a
								href="https://www.linkedin.com/in/bryson-benson-34a848237/">https://www.linkedin.com/in/bryson-benson-34a848237/</a>
						</li>
					</ul>
      </Typography>
    </Container>
    </div>
  );
}

export default App;
