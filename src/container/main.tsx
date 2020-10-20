import React from 'react';
import CardList from '../components/card/cardList';
import { submitToDetails, addToCart } from '../actions/actionCreator';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';
import { IStore } from '../types';


interface StateProps {
    dataProduct: IStore[]
}
interface DispatchProps {
    submitToDetails: (id:number) => void, 
    addToCart: (id:number) => void, 
}


type IMain=  DispatchProps & StateProps; 

const Main:React.FC<IMain> = ({dataProduct, submitToDetails, addToCart }) => {
    return(
        <div className="container">
            <h1 className="text-center mt-5 my-title"><strong className="mr-3">Our</strong>Products</h1>
            <CardList 
            arr={dataProduct}  
            addToCart={addToCart} 
            submitToDetails={submitToDetails}
            />
        </div>
    )
};

const mapState = (state:RootState):any => ({
    dataProduct: state.storeProductReducer.products
})



export default connect(mapState, { submitToDetails, addToCart })(Main);