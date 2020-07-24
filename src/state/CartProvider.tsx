import React from "react";

interface CartItem {
  item: string;
  price: number;
  quantity: number;
}

type Action =
  | { type: "add"; payload: CartItem }
  | { type: "removeOne"; payload: CartItem }
  | { type: "removeAll"; payload: CartItem };

type Dispatch = (action: Action) => void;
type State = { cart: Array<CartItem> };
type CartProviderProps = { children: React.ReactNode };

const CartContext = React.createContext<State | undefined>(undefined);
const CartDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const cartReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "add": {
      return { cart: [...state.cart, action.payload] };
    }

    case "removeOne": {
      // find the item to decrement
      const decrementedCart = [...state.cart].map((current) => {
        if (current.item === action.payload.item) {
          // if its quantity is not 0 already
          if (current.quantity) {
            // decrement
            current.quantity--;
          }
          // otherwise do nothing
        }
        return current;
      });
      return {
        cart: decrementedCart,
      };
    }

    case "removeAll": {
      const filtered = [...state.cart].filter(
        (current) => current.item !== action.payload.item
      );
      return { cart: filtered };
    }

    default: {
      return state;
    }
  }
};

const initialState: State = {
  cart: [
    {
      item: "",
      price: 0,
      quantity: 0,
    },
  ],
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

const useCartState = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error(`useCartState must be used within a CartProvider`);
  }
  return context;
};

const useCartDispatch = () => {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error(`useCartDispatch must be used within a CartProvider`);
  }
  return context;
};

export { CartProvider, useCartDispatch, useCartState };
