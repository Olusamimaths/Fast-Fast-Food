type CartItem = {
  item: string;
  price: number;
  quantity: number;
};

export const calcTotalPrice = (cart: Array<CartItem>): number => {
  if (!cart || !cart.length) return 0;
  let total: number = 0;

  cart.reduce((acc, cur) => {
    total = acc + cur.price * cur.quantity;
    return total;
  }, 0);

  return total;
};

export const calcTotalQuantity = (cart: Array<CartItem>): number => {
  if (!cart || !cart.length) return 0;
  let total: number = 0;
  cart.reduce((acc, cur) => {
    total = acc + cur.quantity;
    return total;
  }, 0);

  return total;
};
