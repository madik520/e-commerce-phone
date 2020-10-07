import React from 'react';
import { storeProducts } from '../data';
import CardList from '../components/card/cardList';
import { submitToDetails } from '../actions/actionCreator';
import { connect } from 'react-redux';


type IPhoneTypes = {
    id: number, 
    title: string, 
    img: string, 
    price: number, 
}

interface IMainProp {
    storeProducts: Array<IPhoneTypes>,
    submitToDetails: (obj:object) => void
}

const Main:React.FC<IMainProp> = ({ submitToDetails }) => {
    return(
        <div className="container">
            <h1 className="text-center mt-5 my-title"><strong className="mr-3">Our</strong>Products</h1>
            <CardList arr={storeProducts}  onClick={() => {}} submitToDetails={submitToDetails} />
        </div>
    )
};

export default connect<IMainProp>(null, { submitToDetails })(Main);