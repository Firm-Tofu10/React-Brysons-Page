import React from "react";

function Footer (props) {
	console.log("Footer Props", props)
	return (
		<footer>
			<p>{`${props.version}By:Firm-Tofu10`}</p>
		</footer> 
	)

}
export default Footer