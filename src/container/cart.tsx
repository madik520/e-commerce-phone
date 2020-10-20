import React from 'react';
import CartColumn from '../components/cartColumn/cartColumn';
import CartItem from '../components/cartColumn/cartItem';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';
import { IStore } from '../types';

interface StateProps {
    shoppingCart: IStore[]
}



const Cart:React.FC<StateProps> = ({ shoppingCart }) => {
    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <CartColumn />
            <CartItem arr={shoppingCart} />
        </div>
    )
};

const mapStateToProps = (state:RootState) => ({
    shoppingCart: state.storeProductReducer.shopingCart
})

export default connect(mapStateToProps)(Cart);