import React from 'react';
import CardItem from './cardItem';
import { submitToDetails } from '../../actions/actionCreator';
import { connect } from 'react-redux';



type ICardTypes = {
    id: number,
    title: string,
    img: string,
    price: number,
    company: string,
    info: string
}
interface ICardList{
    arr: Array<ICardTypes>,
    add: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>
    submitToDetails: any
}


const CardList:React.FC<ICardList> = ({ arr, add, onClick, submitToDetails }) => {
    return(
        <ul className="row">
            { arr.map(({ id, title, price, img, company, info }) => {
                return <CardItem 
                key={id} 
                id={id} 
                title={title} 
                price={price}
                img={require(`../../styles/${img}`)}
                add={add}
                onClick={() => {}}
                submit={() => submitToDetails({id, title, price, img, company, info})}
                />
            }) }
        </ul>
    )
};


export default connect(null, { submitToDetails })(CardList);