export const addCart = (product) => {
    return {
        type: "addcart",
        payload: product
    };
};

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    };
};

export const addOrder = (order) => {
    return {
        type: "ADDORDER",
        payload: order
    };
};
