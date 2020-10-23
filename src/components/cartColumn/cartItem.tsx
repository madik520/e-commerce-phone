import React from 'react';

type CartTypes = {
    id: number,
    title: string, 
    price: number, 
    img: string, 
    count: number, 
    total: number 
}

interface ICart {
    arr: CartTypes[],
    increment: (num:number) => void,
    decrement: (num:number) => void,
    removeCartItem: (id:number) => void
}

const CartItem:React.FC<ICart> = ({ arr, increment, decrement, removeCartItem }) => {
    return(
        <>
            { arr.map(({ id, title, price, img, count, total }) => {
                return <div key={id} className="row mt-3">
                    <div className="col-10 mx-auto col-lg-2">
                        <img className="img-fluid" style={{'width': '5rem','height': '5rem'}} src={require(`../../styles/${img}`)} alt="phone"/>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>{title}</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="font-weight-bold">${price}</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="btn-group">
                            <button onClick={() => decrement(id)} className="btn">-</button>
                            <div className="cart-count ml-2 mr-2">{count}</div>
                            <button onClick={() => increment(id)} className="btn">+</button>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <i onClick={() => removeCartItem(id)} style={{'color': '#ffa400', 'cursor': 'pointer'}} className="fas fa-trash"></i>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="font-weight-bold">Item Total : <span>${total}</span></p>
                    </div>
                </div>
            }) }
        </>
    )
};

export default CartItem;