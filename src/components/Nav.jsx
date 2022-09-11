import React from "react";
import Navlogo from "./Banner2.png"
import About from "./thiscomp"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Nav () {
	console.log("Nav Props")
	return (
		// <div style={{backgroundImage: 'url(' + require('./Banner.png') + ')'}}>
		// <Router>
		<div style={{backgroundImage: `url(${Navlogo})`,height:"60vh",width:"100%"}}>
		
		
		
		
		
        {/* <Routes>
        <Route path="/About" element={<About />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </div>
    </Router> */}

		)

};
export default Nav;