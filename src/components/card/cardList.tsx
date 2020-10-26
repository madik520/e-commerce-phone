import React from 'react';
import CardItem from './cardItem';
import { IStore } from '../../types';
import { IModalProps } from '../../types';


interface ICardList{
    arr: IStore[],
    submitToDetails: (id:number) => void,
    addToCart: (id:number) => void,
    openModal: (obj:IModalProps) => void
}


const CardList:React.FC<ICardList> = ({ arr, submitToDetails, addToCart, openModal }) => {
    return(
        <div className="row">
            { arr.map(({ id, title, price, img, inCart, count, total }) => {
                return <CardItem 
                    key={id} 
                    id={id} 
                    title={title} 
                    price={price}
                    img={img}
                    inCart={inCart}
                    addToCart={addToCart}
                    openModal={openModal}
                    submit={() => submitToDetails(id)}
                    total={total}
                    count={count}
                />
            }) }
        </div>
    )
};


export default CardList;