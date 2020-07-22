import image1_xs from "../../images/image1_xs.jpg";
import food1 from "../../images/food1.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";

type FoodItem = {
  image: string;
  title: string;
  description: string;
  link: string;
};

type FoodItems = FoodItem[];

const foodItems: FoodItems = [
  {
    image: image1_xs,
    title: "Yummy Spaghetti",
    description: "Best in the world",
    link: "#",
  },
  {
    image: food1,
    title: "Bracolli",
    description: "Try out the yummy bracolli",
    link: "#",
  },
  {
    image: food3,
    title: "Fried Rice",
    description: "Fantabolous!!!!",
    link: "#",
  },
  {
    image: food4,
    title: "Pizza Pizza",
    description: "Our pizza is the best!",
    link: "#",
  },
  {
    image: food3,
    title: "Fried Rice",
    description: "Fantabolous!!!!",
    link: "#",
  },
  {
    image: food4,
    title: "Pizza Pizza",
    description: "Our pizza is the best!",
    link: "#",
  },
  {
    image: food3,
    title: "Fried Rice",
    description: "Fantabolous!!!!",
    link: "#",
  },
];

export default foodItems;
