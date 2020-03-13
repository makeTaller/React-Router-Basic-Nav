import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
	<Route exact path="/" component={Home} />
	<Route path="/About" component={About} />
	<Route path="/Contact" component={Contact} />
	<Route path="/Navigation" component={Navigation} />
  </div>
);

export default App;
