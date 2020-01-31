import React, { Component } from 'react';
import Card from '../components/Card/Card';
import dato from '../assets/data.json';
import { NamedChunksPlugin } from 'webpack';

class List extends Component {
	constructor(){
		super();
		this.state = {
			data: [],
			loading: true,
		};
	}

	async componentDidMount(){
		const movies = await fetch('/src/assets/data.json');		
		const moviesJson = await movies.json();
		console.log(moviesJson);
		if(moviesJson){
			this.setState({
				data: moviesJson,
				loading: false,
			});
		}
	}

	render() {
			const { data, loading } = this.state;
			if(loading) {
				return <div>Loading...</div>
			} 
			return 
			(
				<div className="row">
				{data.map(movie => 
					<div>
						<Card key={ movie.id } movie={movie} />
					</div>
				)}
				</div>
			);
			
	}
};
export default List;
