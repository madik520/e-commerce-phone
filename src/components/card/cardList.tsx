import React from 'react';
import CardItem from './cardItem';
import { IStore } from '../../types';



interface ICardList{
    arr: IStore[],
    submitToDetails: (id:number) => void,
    addToCart: (id:number) => void
}


const CardList:React.FC<ICardList> = ({ arr, submitToDetails, addToCart}) => {
    return(
        <ul className="row">
            { arr.map(({ id, title, price, img, inCart, count, total }) => {
                return <CardItem 
                key={id} 
                id={id} 
                title={title} 
                price={price}
                img={img}
                inCart={inCart}
                addToCart={addToCart}
                submit={() => submitToDetails(id)}
                total={total}
                count={count}
                />
            }) }
        </ul>
    )
};


export default CardList;