import React from "react";
import Navlogo from "public/Banner.png"

function Nav (props) {
	console.log("Nav Props", props)
	return (
		<nav id="nav" className='navbar'>{`${props.nav}`}</nav>
		//  { <div className='navbar-box'></div>
		//  <link to='public/Banner.png' className='navbar-picture'></link> }

		)

}
export default Nav