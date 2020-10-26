import React from 'react';
import './styles/main.scss';
import './container/header';
import Header from './container/header';
import { Switch, Route } from 'react-router-dom';
import Main from './container/main';
import Details from './container/details';
import Cart from './container/cart';
import NotFound from './container/notfound';





const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
