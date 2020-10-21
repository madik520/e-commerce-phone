import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';
import { Link } from 'react-router-dom';
import { addToCart, openModal } from '../actions/actionCreator';
import { IStore } from '../types';
import Modal from '../components/modal/modal';
interface IStateProps {
    details: IStore[],
}

interface IDispatchProps {
    addToCart: (id:number) => void, 
    openModal: (obj:any) => void
}

interface OwnProps {
    id: number,
    title: string,
    img: string,
    price: number,
    company: string,
    info: string,
    inCart: boolean,
}

type DetailsTypes = IStateProps & IDispatchProps & OwnProps;

const Details:React.FC<DetailsTypes> = ({ details, addToCart, openModal }) => {
    return details.length !== 0 ? (
        <>
        <Modal />
        { details.map(({ id, title, img, company, price, info, inCart }) => {
            return <div key={`${id}`} className="container">
            <h1 className="text-center details-title">{title}</h1>
            <main className="details-wrapper">
                <div className="col-5 details-img">
                    <img src={require(`../styles/${img}`)} alt="phone" />
                </div>
                <div className="col-7 details-content">
                    <ul className="details-list">
                        <li>Model : {title}</li>
                        <li>MADE BY: {company}</li>
                        <li>Price: ${price}</li>
                        <li>Some Info About Products:
                            <p>{info}</p>
                        </li>
                    </ul>
                    <div className="details-footer">
                        <Link to="/"><button className="btn details-btn mr-2">Back To Products</button></Link>
                        <button onClick={() => {addToCart(id); openModal({ title, img, price })}} disabled={inCart ? true : false} className="btn details-btn">{inCart ? "In cart" : "Add To Cart"}</button>
                    </div>
                </div>
            </main>
    </div>
        }) }
        </>
    ): <h1 className="text-center mt-5">You don`t choose any product</h1>
};

const mapStateToProps = (state:RootState):IStateProps => ({
        details: state.storeProductReducer.details,
})

export default connect<IStateProps, IDispatchProps, OwnProps, RootState>(mapStateToProps, { addToCart, openModal })(Details);