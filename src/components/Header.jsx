import React from "react";

function Header (props) {
	console.log("Head props", props)
	return (
		<div id="header">
			<h3>{`${props.title}`}</h3>
		</div> 
	)

}
export default Header