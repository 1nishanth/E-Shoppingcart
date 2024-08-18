import React, { createContext, useContext, useReducer } from 'react';
import faker from "faker"
import { cartReducer, productReducer } from "./Reducers";



const Cart = createContext();
faker.seed(99);   //it will render only one type of for every time it will fetch different data to stop that we use  this

const Context = ({ children }) => {
    // creating the data fetching dynamically from open source api
    const products = [...Array(30)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),      //check whether the product in stock or not value of stock 
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    console.log(productState);
    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider >
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
};