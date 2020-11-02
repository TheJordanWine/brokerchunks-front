const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {greetings: []};
	}

	componentDidMount() {
		client({method: 'GET', path: 'http://localhost:8080/api/0/greetings'}).done(response => {
			this.setState({greetings: response.entity._embedded.greetings});
		});
	}

	render() { 
		return (
			<GreetingList greetings={this.state.greetings}/>
		)
    }
}

class GreetingList extends React.Component{
	render() {
		const greetings = this.props.greetings.map(greeting =>
			<Greeting key={greeting._links.self.href} greeting={greeting}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Content</th>
					</tr>
					{greetings}
				</tbody>
			</table>
		)
	}
}

class Greeting extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.greeting.content}</td>
			</tr>
		)
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)