import React, { useState, useEffect } from 'react';
import CartColumn from '../components/cartColumn/cartColumn';
import CartItem from '../components/cartColumn/cartItem';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';
import { IStore } from '../types';
import { Link } from 'react-router-dom';
import { increment, decrement, clearCart, removeCartItem } from '../actions/actionCreator';

interface StateProps {
    shoppingCart: IStore[]
}

interface DispatchProps {
    increment: (num:number) => void,
    decrement: (num:number) => void,
    clearCart: () => void,
    removeCartItem: (id:number) => void
}

type CartTypes = StateProps & DispatchProps;

const Cart:React.FC<CartTypes> = ({ shoppingCart, increment, decrement, clearCart, removeCartItem }) => {
    const [total, setTotal] = useState(0);
    const getTotal = shoppingCart.map(i => i.total * i.count);
    const result = getTotal.reduce((a, b) => a + b , 0);
    useEffect(() =>{
        setTotal(result);
    }, [result])
    return shoppingCart.length !== 0 ? (
        <div className="container-fluid text-center d-lg-block">
            <CartColumn />
            <CartItem arr={shoppingCart} increment={increment} decrement={decrement}  removeCartItem={removeCartItem} />
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/"><button onClick={() => clearCart()} className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">clear cart</button></Link>
                        <h5><span className="text-uppercase text-title">Total :</span><strong style={{'fontSize': '1.5rem'}}>$ {total}</strong></h5>
                    </div>
                </div>
            </div>
        </div>
    ): <h1 className="text-center mt-5 cart-empty">Your cart is Empty</h1>
};

const mapStateToProps = (state:RootState) => ({
    shoppingCart: state.storeProductReducer.shopingCart
})

export default connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, { increment, decrement, clearCart, removeCartItem })(Cart);