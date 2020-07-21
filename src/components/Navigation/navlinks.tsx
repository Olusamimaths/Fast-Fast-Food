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
    classNames: "active",
  },

  {
    href: "#",
    link_text: "Meals",
    classNames: "",
  },
  {
    href: "#",
    link_text: "About Us",
    classNames: "",
  },

  {
    href: "#",
    link_text: "Login",
    classNames: "",
  },
  {
    href: "#",
    link_text: "Sign up",
    classNames: "",
  },
];

export default navlinks;
