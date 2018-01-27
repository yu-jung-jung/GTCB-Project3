//-------------- Imports ----------------------//
	import React from "react"
	import "./FeedColumn.css"
	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var FeedColumn = props =>
			<Grid.Column>
			
				
				<Segment  style={{background:"lightblue"}}>
				<h2> {props.FeedName} </h2>
				<div className = "scrollingDiv">
					{props.children}
				</div>
				</Segment>
				
			</Grid.Column>


			
	export default FeedColumn;