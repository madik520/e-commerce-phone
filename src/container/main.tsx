import React from 'react';
import CardList from '../components/card/cardList';
import { submitToDetails, addToCart, openModal } from '../actions/actionCreator';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';
import { IStore } from '../types';
import Modal from '../components/modal/modal';
import { IModalProps } from '../types';


interface StateProps {
    dataProduct: IStore[]
}
interface DispatchProps {
    submitToDetails: (id:number) => void, 
    addToCart: (id:number) => void,
    openModal: (obj:IModalProps) => void 
}


type IMain=  DispatchProps & StateProps; 

const Main:React.FC<IMain> = ({dataProduct, submitToDetails, addToCart, openModal }) => {
    return(
        <div className="container">
            <Modal />
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title mt-5">
                    <h1 className="text-capitalize my-title"><strong className="mr-3">Our</strong>Products</h1>
                </div>
            </div>
            <CardList 
            arr={dataProduct}  
            addToCart={addToCart} 
            submitToDetails={submitToDetails}
            openModal={openModal}
            />
        </div>
    )
};

const mapState = (state:RootState) => ({
    dataProduct: state.storeProductReducer.products
})



export default connect<StateProps, DispatchProps, {}, RootState>(mapState, { submitToDetails, addToCart, openModal })(Main);