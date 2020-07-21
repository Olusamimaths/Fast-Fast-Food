type Link = {
  href: string;
  link_text: string;
  classNames: string;
};

type NavLinks = Link[];

const navlinks: NavLinks = [
  {
    href: "#",
    link_text: "Home",
    classNames: "",
  },

  // {
  //   href: "#",
  //   link_text: "Meals",
  //   classNames: "",
  // },
  // {
  //   href: "#",
  //   link_text: "About Us",
  //   classNames: "",
  // },

  {
    href: "/signin",
    link_text: "Sign In",
    classNames: "",
  },
  {
    href: "/signup",
    link_text: "Sign Up",
    classNames: "",
  },
];

export default navlinks;
