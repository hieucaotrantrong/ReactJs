// Trong file CartBtn.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
    const state = useSelector((state) => state.addItem);

    return (
        <>
            {/* Nút Cart với NavLink để chuyển hướng đến trang giỏ hàng */}
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
        </>
    );
};

export default CartBtn;
