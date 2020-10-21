import React from 'react';
import { Link } from 'react-router-dom';


interface ICardItem {
    id: number,
    title: string,
    img: string,
    price: number,
    inCart: boolean,
    total: number, 
    count: number,
    submit: React.MouseEventHandler,
    addToCart: (id:number) => void,
    openModal: (obj:object) => void
}

const CardItem:React.FC<ICardItem> = ({ id,  title, img,  price, inCart, submit, addToCart, openModal }) => (
    <li className="col-9 mx-auto col-md-6 col-lg-3 my-3" id={`${id}`}>
        <div className="card">
            <div className="item-main">
                <Link onClick={submit} to={"/details"}>
                    <img src={require(`../../styles/${img}`)} alt="card"/>
                </Link>
                <button disabled={inCart ? true : false} onClick={() => {addToCart(id); openModal({ title, img, price })}} className="btn add-to-card">
                    {inCart ? <span>In cart</span> : <i className="fas fa-cart-plus"></i>}
                </button>
            </div>
            <div className="item-footer">
                <span>{title}</span>
                <span>${price}</span>
            </div>
        </div>
    </li>
);

export default CardItem;