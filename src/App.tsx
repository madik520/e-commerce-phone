import React from 'react';
import './styles/main.scss';
import './container/header';
import Header from './container/header';
import { Switch, Route } from 'react-router-dom';
import Main from './container/main';
import Details from './container/details';
import Modal from './components/modal/modal';
import Cart from './container/cart';
import { connect } from 'react-redux';
import { RootState } from './reducers/index';
import { IModalProps } from './types';


interface IApp {
  modalReducer: IModalProps
}

const App: React.FC<IApp> = ({ modalReducer }) => {
  const { title, price, img, isOpen } = modalReducer;
  return (
    <>
      <Header />
      <Modal title={title} price={price} img={`./styles/${img}`} isOpen={isOpen} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default connect(({ modalReducer }:RootState) => ({ modalReducer }))(App);
