import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import MicroFrontend from './components/MicroFrontend';

let totalRestaurants = 0;
fetch(`${process.env.REACT_APP_CONTENT_HOST}/restaurants.json`)
  .then(res => res.json())
  .then(restaurants => {
    totalRestaurants = restaurants.length;
  });

const getRandomRestaurantId = () =>
  Math.floor(Math.random() * totalRestaurants) + 1;

const Browse = ({ history }) => (
  <MicroFrontend history={history} host={process.env.REACT_APP_BROWSE_HOST} name="Browse" />
);

const Restaurant = ({ history }) => (
  <MicroFrontend history={history} host={process.env.REACT_APP_RESTAURANT_HOST} name="Restaurant" />
);

const Random = () => <Redirect to={`/restaurant/${getRandomRestaurantId()}`} />;

const App = () => (
  <BrowserRouter>
    <>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/restaurant/:id" component={Restaurant} />
        <Route exact path="/random" render={Random} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
