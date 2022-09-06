import React from "react";

function Nav (props) {
	console.log("Nav Props", props)
	return (
		<nav className='Navbar'>{`${props.Nav}`}</nav>
		// {/* <div className='navbar-box'></div>
		// <link to='/' className='navbar-picture'></link> */}

		)

}
export default Nav