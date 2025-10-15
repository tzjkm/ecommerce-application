"use client"; // Enable React hooks and client-side features
import React, { createContext, useContext, useEffect, useReducer } from "react";

// Create a React Context to share cart state and actions across the app
const CartContext = createContext();

// Initial shape of our cart state
const initialState = {
	cartItems: [], // Array of items: { id, title, price, image, quantity }
};

// Pure reducer function to manage cart state transitions
const cartReducer = (state, action) => {
	switch (action.type) {
		case "SET_CART": {
			// Hydrate cart state from localStorage on first load
			return { ...state, cartItems: Array.isArray(action.payload) ? action.payload : [] };
		}
		case "ADD_ITEM": {
			// Default increment quantity to 1 if not provided
			const increment = action.payload.quantity ? Number(action.payload.quantity) : 1;
			// Check if item already exists in cart
			const existingItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			if (existingItemIndex >= 0) {
				// Clone array to avoid mutating state
				const updatedCartItems = [...state.cartItems];
				// Ensure quantity is a number and increment safely
				const currentQty = Number(updatedCartItems[existingItemIndex].quantity || 1);
				updatedCartItems[existingItemIndex] = {
					...updatedCartItems[existingItemIndex],
					quantity: currentQty + increment,
				};
				return { ...state, cartItems: updatedCartItems };
			}
			// If not in cart, add item with a default quantity
			return {
				...state,
				cartItems: [...state.cartItems, { ...action.payload, quantity: increment }],
			};
		}
		case "REMOVE_ITEM": {
			// Filter out the item by id
			return { ...state, cartItems: state.cartItems.filter((item) => item.id !== action.payload.id) };
		}
		case "UPDATE_ITEM": {
			// Update item quantity directly (e.g., from an input)
			const updatedItems = state.cartItems.map((item) =>
				item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
			);
			return { ...state, cartItems: updatedItems };
		}
		case "CLEAR_CART": {
			// Remove all items from the cart
			return { ...state, cartItems: [] };
		}
		default:
			return state; // Return current state for unknown actions
	}
};

// Provider component to wrap the app and expose cart state/actions
export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	// On initial mount, attempt to load existing cart from localStorage
	useEffect(() => {
		try {
			const raw = localStorage.getItem("cart");
			if (raw) {
				const parsed = JSON.parse(raw);
				dispatch({ type: "SET_CART", payload: parsed });
			}
		} catch (e) {
			console.warn("Failed to parse cart from localStorage", e);
		}
	}, []);

	// Persist cart to localStorage whenever it changes
	useEffect(() => {
		try {
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		} catch (e) {
			console.warn("Failed to save cart to localStorage", e);
		}
	}, [state.cartItems]);

	// Action creators for ease-of-use in components
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

	// Provide state and action methods to descendants
	return (
		<CartContext.Provider value={{ cartItems: state.cartItems, addItem, removeItem, updateItem, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook for convenient access to cart context
export const useCart = () => {
	return useContext(CartContext);
};
