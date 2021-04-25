import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
	useEffect(() => document.body.classList.add('bg-red-600'), []);

	return (
		<BrowserRouter>
			<div className="container bg-pink-900">
				<Navbar />
				<Switch>
					<Route>

					</Route>
				</Switch>
				<p className="bg-teal-200">
					Lorem ipsum dolor sit amet <span className="code">consectetur</span>, adipisicing elit. Iusto distinctio nostrum laudantium eaque perferendis possimus voluptates natus. Earum at exercitationem libero, corporis aliquid illo vero repellat eaque hic, quasi perspiciatis.
				</p>
			</div>
		</BrowserRouter>
	)
};

export default App;