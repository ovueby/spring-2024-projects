import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from '../components/Header.jsx';
import { Home } from '../pages/Home/index.jsx';
import { TodoList } from '../pages/TodoList/index.jsx'
import { NotFound } from '../pages/_404.jsx';
import '../style.css';
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
                    <Route path="/TodoList" component={TodoList} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
