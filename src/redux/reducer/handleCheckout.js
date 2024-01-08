// ../redux/reducers/addItem.js
const addItemReducer = (state = [], action) => {
    switch (action.type) {
        case 'addcart':
            // Xử lý thêm sản phẩm vào giỏ hàng
            return [...state, action.payload];
        case 'DELITEM':
            // Xử lý xóa sản phẩm khỏi giỏ hàng
            // ...
            break;
        case 'ADDORDER':
            // Xử lý thêm đơn hàng và reset giỏ hàng
            return [];
        default:
            return state;
    }
};

export default addItemReducer;
