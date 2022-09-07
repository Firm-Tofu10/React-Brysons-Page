import React from "react";
// import Navlogo from "public/Banner.png"

function Nav (props) {
	console.log("Nav Props", props)
	return (
		<nav id="nav" className='navbar'>{`${props.nav}`}
		{/* <NavLink to="/public/Banner.png" articleStyle>
		<h1>Logo</h1>
		</NavLink>
		<Bars />
		<NavMenu>
		<NavLink to="/about" articleStyle>
		About Me
		</NavLink>
		<NavLink to="/portfolio" articleStyle>
		Portfolio
		</NavLink>
		<NavLink to="/resume" articleStyle>
		Resume
		</NavLink>
		<NavLink to="/contact" articleStyle>
		Contact
		</NavLink>
		</NavMenu>
		<NavBtn>
		</NavBtn> */}
		</nav>
		)

}
export default Nav