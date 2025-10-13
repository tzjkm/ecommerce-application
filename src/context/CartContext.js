"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = {
	cartItems: [],
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const existingItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			if (existingItemIndex >= 0) {
				const updatedCartItems = [...state.cartItems];
				updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
				return { ...state, cartItems: updatedCartItems };
			}
			return { ...state, cartItems: [...state.cartItems, action.payload] };
		case "REMOVE_ITEM":
			return { ...state, cartItems: state.cartItems.filter((item) => item.id !== action.payload.id) };
		case "UPDATE_ITEM":
			const updatedItems = state.cartItems.map((item) =>
				item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
			);
			return { ...state, cartItems: updatedItems };
		case "CLEAR_CART":
			return { ...state, cartItems: [] };
		default:
			return state;
	}
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem("cart"));
		if (storedCart) {
			dispatch({ type: "SET_CART", payload: storedCart });
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cartItems));
	}, [state.cartItems]);

	const addItem = (item) => {
		dispatch({ type: "ADD_ITEM", payload: item });
	};

	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: { id } });
	};

	const updateItem = (id, quantity) => {
		dispatch({ type: "UPDATE_ITEM", payload: { id, quantity } });
	};

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	return (
		<CartContext.Provider value={{ cartItems: state.cartItems, addItem, removeItem, updateItem, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};
