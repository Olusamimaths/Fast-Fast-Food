type CartItem = {
  item: string;
  price: number;
  quantity: number;
};

export const cart = [
  {
    item: "Egusi",
    price: 300,
    quantity: 3,
  },
  {
    item: "Salad",
    price: 400,
    quantity: 1,
  },
  {
    item: "Bracolli",
    price: 700,
    quantity: 4,
  },
];

export const calcTotalPrice = (cart: Array<CartItem>): number => {
  let total: number = 0;

  cart.reduce((acc, cur) => {
    total = acc + cur.price * cur.quantity;
    return total;
  }, 0);

  return total;
};

export const calcTotalQuantity = (cart: Array<CartItem>): number => {
  let total: number = 0;
  cart.reduce((acc, cur) => {
    total = acc + cur.quantity;
    return total;
  }, 0);

  return total;
};
