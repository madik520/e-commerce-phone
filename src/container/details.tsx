import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';

type DetailsProps = {
    id: number | null,
    title: string | null,
    img: string | null,
    price: number | null,
    company: string | null,
    info: string | null,
}

interface IDetails {
    detailsReducer: DetailsProps
    submitToDetails: React.MouseEventHandler
}


const Details:React.FC<IDetails> = ({ detailsReducer }) => {
    const { id, title, img, price, company, info } = detailsReducer;
    return id !== null ? (
        <>
            <div id={`${id}`} className="container">
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
                                <button className="btn details-btn mr-2">Back To Products</button>
                                <button className="btn details-btn">Add To Cart</button>
                            </div>
                        </div>
                    </main>
            </div>
        </>
    ): <h1 className="text-center mt-5">You don`t choose any product</h1>
};

export default connect(({ detailsReducer }:RootState) => ({ detailsReducer }))(Details);