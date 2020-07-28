import image1_xs from "../../images/image1_xs.jpg";
import food1 from "../../images/food1.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";

type FoodItem = {
  image: string;
  title: string;
  description: string;
  link: string;
  price: number;
};

type FoodItems = FoodItem[];

const foodItems: FoodItems = [
  {
    image: image1_xs,
    title: "Yummy Spaghetti",
    description: "Best in the world",
    link: "#",
    price: 100,
  },
  {
    image: food1,
    title: "Bracolli",
    description: "Try out the yummy bracolli",
    link: "#",
    price: 400,
  },
  {
    image: food3,
    title: "Fried Plantain",
    description: "Fantabolous!!!!",
    link: "#",
    price: 300,
  },
  {
    image: food4,
    title: "Jollof Rice",
    description: "Our pizza is the best!",
    link: "#",
    price: 600,
  },
  {
    image: food3,
    title: "Rice",
    description: "Fantabolous!!!!",
    link: "#",
    price: 700,
  },
  {
    image: food4,
    title: "!Pizza",
    description: "Our pizza is the best!",
    link: "#",
    price: 800,
  },
  {
    image: food3,
    title: "Fried Plaintain",
    description: "Fantabolous!!!!",
    link: "#",
    price: 200,
  },
];

export default foodItems;
