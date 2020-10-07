import React from 'react';
import CardItem from './cardItem';




type ICardTypes = {
    id: number,
    title: string,
    img: string,
    price: number,
    company: string,
    info: string,
    inCart: boolean
}
interface ICardList{
    arr: Array<ICardTypes>,
    onClick: React.MouseEventHandler<HTMLDivElement>,
    submitToDetails: (obj:object) => void
}


const CardList:React.FC<ICardList> = ({ arr, onClick, submitToDetails}) => {
    return(
        <ul className="row">
            { arr.map(({ id, title, price, img, company, info, inCart }) => {
                return <CardItem 
                key={id} 
                id={id} 
                title={title} 
                price={price}
                img={require(`../../styles/${img}`)}
                inCart={inCart}
                onClick={() => {}}
                submit={() => submitToDetails({id, title, price, img, company, info})}
                />
            }) }
        </ul>
    )
};


export default CardList;