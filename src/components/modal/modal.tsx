import React from 'react';

interface IModal {
    title: string,
    img: string,
    price: number,
    inCart: boolean
}

const Modal:React.FC<IModal> = ({ title, img, price, inCart }) => {
    return inCart ? (
        <div className="modal-container">
            <div className="modal">
                <span className="modal-title text-center mt-4">Item Added To Cart</span>
                <img src={img} alt="phone" />
                <h2>{title}</h2>
                <span>Price: ${price}</span>
                <div className="modal-footer">
                    <button className="btn">Store</button>
                    <button className="btn">Go To Cart</button>
                </div>
            </div>
        </div>
    ): null;
};

export default Modal;