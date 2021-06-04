import React from 'react';
import './App.css';
import ListItem from './List/ListItem'
function App(props) {
	debugger;
	let List = props.state.ListItem.map(l => <ListItem id={l.id} Name={l.product}/>)



  return (
    <div className="wrapper">	
		{List}
    </div>
  );
}

export default App;
