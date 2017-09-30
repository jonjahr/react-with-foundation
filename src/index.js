import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/app.css';
import FoundationExample from './components/FoundationExample';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				{/* Replace with your "App" component */}
				<Match exactly pattern="/" component={FoundationExample} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
		)
}

render(<Root/>, document.querySelector('#main'));
