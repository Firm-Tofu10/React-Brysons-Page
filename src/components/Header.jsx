import React from "react";
// import myLogo from "src/components/Banner.png"

function Header (props) {
	console.log("Head props", props)
	return (
		<div id="header">
			Bryson's Portfolio
			<ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
						<li>
              <a href="#resume">About</a>
            </li>
						<li>
              <a href="#contact">About</a>
            </li>
    </ul>
		</div> 
	)

}
export default Header