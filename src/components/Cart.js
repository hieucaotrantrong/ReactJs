// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delCart, addOrder } from '../redux/action/index';

const Cart = () => {
    const state = useSelector((state) => state?.addItem || []);
    const dispatch = useDispatch();

    const CartBtn = (item) => {
        dispatch(delCart(item));
    };

    const Checkout = () => {
        const order = {
            items: state,
        };
        dispatch(addOrder(order));
    };

    const cartItems = (cartItem) => (
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">
                <button onClick={() => CartBtn(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                    </div>
                    <div className="col-md-4">
                        <h3>{cartItem.title}</h3>
                        <p className="lead fw-bold">${cartItem.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const emptyCart = () => (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Không có sản phẩm nào</h3>
                </div>
            </div>
        </div>
    );

    const button = () => (
        <div className="container">
            <div className="row">
                <button onClick={Checkout} className="btn btn-outline-primary mb-5 w-25 mx-auto">Thanh toán</button>
            </div>
        </div>
    );

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    );
};

export default Cart;
