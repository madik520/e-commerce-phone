import React from 'react';
import CardList from '../components/card/cardList';
import { submitToDetails, addToCart, openModal } from '../actions/actionCreator';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';
import { IStore } from '../types';
import Modal from '../components/modal/modal';


interface StateProps {
    dataProduct: IStore[]
}
interface DispatchProps {
    submitToDetails: (id:number) => void, 
    addToCart: (id:number) => void,
    openModal: (obj:object) => void 
}


type IMain=  DispatchProps & StateProps; 

const Main:React.FC<IMain> = ({dataProduct, submitToDetails, addToCart, openModal }) => {
    return(
        <div className="container">
            <Modal />
            <h1 className="text-center mt-5 my-title"><strong className="mr-3">Our</strong>Products</h1>
            <CardList 
            arr={dataProduct}  
            addToCart={addToCart} 
            submitToDetails={submitToDetails}
            openModal={openModal}
            />
        </div>
    )
};

const mapState = (state:RootState):any => ({
    dataProduct: state.storeProductReducer.products
})



export default connect(mapState, { submitToDetails, addToCart, openModal })(Main);