import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navlogo from "./components/Banner2.png"
import { teal } from '@material-ui/core/colors';
import passGen from "./components/codegen.png";
import weather from "./imgs/WeatherApp.jpg";
import notes from "./imgs/NoteTaker2.jpg";
import movies from "./imgs/MovieClub.jpg";

function App() {
	return (
		<div>

			{<Header title="Bryson Benson." />}
			<div id="imgBack" style={{ backgroundImage: `url(${Navlogo})` }}>
				<ul id="navLine">
					<li>
						<a id='colorA' href="#about">About</a>
					</li>
					<li>
						<a id='colorB' href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a id='colorC' href="#resume">Resume</a>
					</li>
					<li>
						<a id='colorD' href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			{/* This line is here becuse i was to generate the nav bar on the image. */}
			{/* Edit img with tutor */}
			<Container id='master-container'>
			<Container maxWidth="sm"><img id="codeGen" src={passGen} alt="passGen"/></Container>
			<Container id='about' maxWidth="sm">
				<Typography component="div" id="aboutCon">
					<h3 style={{ color: "Black", textAlign: "center", fontSize: "30px" }}>About Me</h3>
					Hello, my name is Bryson Benson I am 24 years old Full Stack Web Developer, I recently graduated from the
					University Of Utah via there coding boot camp. Some of my hobbies outside of work consist of Rock Climbing
					and Video Games. Being from Salt Lake there is plenty of climbing locally and this gives me to the
					opportunity to explore and climb rocks. I also really injoy working with and learning from other people.
				</Typography>
			</Container>
			<Container><img id="weather" src={weather} alt="weather"/></Container>
			<Container id='portfolio' maxWidth="sm">
				<Typography component="div" id="portfolioCon">
					<h3 style={{ color: "Black", textAlign: "center", fontSize: "30px", fontWeight: "bold",color:"black" }}>Portfolio</h3><li>Day Planer: <a
						href="https://github.com/Firm-Tofu10/Day-Planer">https://github.com/Firm-Tofu10/Day-Planer</a></li>
					<li>Movie Blog: <a
						href="https://github.com/Firm-Tofu10/MovieClub">https://github.com/Firm-Tofu10/MovieClub</a>
					</li>
					<li>ReadMeGen: <a herf="https://github.com/Firm-Tofu10/RedMe-Gen"> {/* Edit img with tutor */}
						https://github.com/Firm-Tofu10/ReadMe-Gen</a>
					</li>
					<li>MyTeamGen: <a herf="https://github.com/Firm-Tofu10/MyTeamGen"> {/* Edit img with tutor */}
						https://github.com/Firm-Tofu10/MyTeamGen</a>
					</li>
					<li>EmployeeDataBase: <a href="https://github.com/Firm-Tofu10/EmployeeDataBase">
						https://github.com/Firm-Tofu10/EmployeeDataBase</a>
					</li>
					<li>Weather App: <a href="https://github.com/Firm-Tofu10/Weather-App">
					https://github.com/Firm-Tofu10/Weather-App</a></li>
					<li>Function Breakdown: <a href="https://github.com/Firm-Tofu10/FunctionBreakDown">
					https://github.com/Firm-Tofu10/FunctionBreakDown</a></li>
					<h2 class="mb-0 text-primary">Deployed Projects</h2>
					<li>Day Planer: <a href="https://note-backend-test.herokuapp.com/">
					https://note-backend-test.herokuapp.com/</a>
					</li>
					<li>Movie Blog: <a href="https://movieclub3.herokuapp.com/login">
					https://movieclub3.herokuapp.com/login</a></li>
					<li>Weather-App <a href="https://firm-tofu10.github.io/Weather-App/">
					https://firm-tofu10.github.io/Weather-App/</a></li>
					<li>Password Generator <a href="https://firm-tofu10.github.io/Weather-App/">
					https://firm-tofu10.github.io/PasswordGenerator/</a></li>
					<li>Under A-Tack <a href="https://underatackboard.herokuapp.com/">
					https://underatackboard.herokuapp.com/</a></li>

				</Typography>
			</Container>
			<Container><img id="noteT" src={notes} alt="notes"/></Container>
			<Container id='resume' maxWidth="sm">
				<Typography component="div">
					<h3 style={{ color: "black", textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>Resume</h3>I graduated from University of Utah coding boot camp, the boot camp was a great
					experience mostly because I have been trying to learn how to code since high school. This gave me some
					much needed structure and the opportunity to learn from and meet like minded people. I also got to
					experience to see how much there is to learn which is very exciting because i'm the kind of person
					that becomes bored when there is nothing else to learn or improve at. I would highly recommend this
					program for anyone that need the structure to learn how to code.
					{/* <h3>Link to resume.</h3><li> */} {/* Edit img with tutor */}
					{/* <p herf="https://docs.google.com/document/d/13n1acTQ35vnsaBpVHn7HGekwTOYwaoC9xDYS6eyJpxM/edit#heading=h.tuxh7mwdaxox">https://docs.google.com/document/d/13n1acTQ35vnsaBpVHn7HGekwTOYwaoC9xDYS6eyJpxM/edit#heading=h.tuxh7mwdaxox</p></li> */}
				</Typography>
			</Container>
			<Container><img id="moveTV" src={movies} alt="movies"/></Container>
			<Container id='contact' maxWidth="sm">
				<Typography component="div">
					<h3 style={{ color: "Black", textAlign: "center", fontSize: "30px",color:"black"}}>Contact</h3>
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
			</Container>
			<Footer id="footer" version='V0.1.1----' />
		</div>
	);
}

export default App;
