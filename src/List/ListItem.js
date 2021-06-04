import React from 'react';
let styles = {
	li:{
			display:'flex',
			justifyContent:'space-between',
			alignItems:'center',
			border:'1px solid',
			borederRadius:'4px',
			marginBottom:'.5rem',

	}
}


let ListItem = (props) =>{
	return(
		<li style={styles.li}>
			<input type='Checkbox' />
			{props.id} 
			{props.Name}
			<button>&times;</button>
		</li>
	)
}
export default ListItem