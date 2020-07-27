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

const CartStateContext = React.createContext<State | undefined>(undefined);
const CartDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      let copied = [...state.cart];

      for (let i = 0; i < copied.length; i++) {
        if (copied[i].item === action.payload.item) {
          copied[i].quantity += action.payload.quantity;
          return { cart: copied };
        }
      }
      return {
        cart: [...state.cart, action.payload],
      };
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
}

const initialState: State = {
  cart: [
    {
      item: "Bracolli",
      price: 400,
      quantity: 1,
    },
    {
      item: "Fried Rice",
      price: 700,
      quantity: 2,
    },
  ],
};

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  console.log(state)

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

function useCartState() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error(`useCartState must be used within a CartProvider`);
  }
  return context;
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error(`useCartDispatch must be used within a CartProvider`);
  }
  return context;
}

// const useCart = () => [useCartState(), useCartDispatch()];

export { CartProvider, useCartState, useCartDispatch };
