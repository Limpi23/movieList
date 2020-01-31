import React from 'react';
import ReactDom from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="container-fluid">
			<h1>MovieList</h1>
			<nav className="navbar sticky-top navbar-light bg-dark">
				<h1 className="navbar-brand text-light">MovieList</h1>
			</nav>
			
			<List />		
		</div>
		);
}

ReactDom.render(<App/>, document.getElementById('root'));
