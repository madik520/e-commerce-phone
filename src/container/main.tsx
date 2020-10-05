import React from 'react';
import { storeProducts } from '../data';
import CardList from '../components/card/cardList';

type IPhoneTypes = {
    id: number, 
    title: string, 
    img: string, 
    price: number, 
}

interface IMainProp {
    storeProducts: Array<IPhoneTypes>
}

const Main:React.FC<IMainProp> = () => {
    return(
        <div className="container">
            <h1 className="text-center mt-5 my-title"><strong className="mr-3">Our</strong>Products</h1>
            <CardList arr={storeProducts} add={false} onClick={() => {}} />
        </div>
    )
};

export default Main;