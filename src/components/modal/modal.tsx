import React from 'react';
import { IModalProps } from '../../types';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/actionCreator';

interface StateProps {
    modalState: IModalProps
}

interface DispatchProp {
    closeModal: () => void
}

type ModalTypes = StateProps & DispatchProp;

const Modal:React.FC<ModalTypes> = ({ modalState, closeModal }) => {
    const { title, img, price, isOpen } = modalState;
    return isOpen ? (
        <div className="modal-container">
            <div className="modal-content">
                <span className="modal-title text-center mt-4">Item Added To The Cart</span>
                <img src={require(`../../styles/${img}`)} alt="phone" />
                <h2>{title}</h2>
                <span>Price: ${price}</span>
                <div className="modal-footer-block">
                    <button onClick={() => closeModal()} className="btn">Store</button>
                    <Link to="/cart"><button className="btn">Go To Cart</button></Link>
                </div>
            </div>
        </div>
    ): null;
};

const mapState = (state:RootState):StateProps => ({
    modalState: state.modalReducer
})

export default connect<StateProps, DispatchProp, {}, RootState>(mapState, { closeModal })(Modal);