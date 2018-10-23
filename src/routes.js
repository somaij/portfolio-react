import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import App from './App';
import Home from './Home';
import BlogHome from './BlogHome';
import BlogPost from './BlogPost';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/blog" component={BlogHome} />
      <Route path="/blog/:slug" component={BlogPost} />
    </Route>
  </Router>
);

export default Routes;