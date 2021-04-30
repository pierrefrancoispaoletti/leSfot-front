import {
  faCocktail,
  faCookieBite,
  faGlassCheers,
  faHatChef,
  faPizza,
  faSalad,
  faSteak,
  faStroopwafel,
} from "@fortawesome/pro-duotone-svg-icons";

const categories = [
  {
    name: "Suggestions du Chef",
    slug: "suggestions",
    icon: faHatChef,
    innerMenu: [],
    style: {
      "--fa-primary-color": "firebrick",
      "--fa-secondary-color": "chocolate",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
  {
    name: "Pizzas",
    slug: "pizzas",
    icon: faPizza,
    innerMenu: [],
    style: {
      "--fa-primary-color": "burlywood",
      "--fa-secondary-color": "firebrick",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
  {
    name: "Salades",
    slug: "salades",
    icon: faSalad,
    innerMenu: [],
    style: {
      "--fa-primary-color": "firebrick",
      "--fa-secondary-color": "green",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
  {
    name: "Viandes",
    slug: "viandes",
    icon: faSteak,
    innerMenu: [],
    style: {
      "--fa-primary-color": "firebrick",
      "--fa-secondary-color": "burlywood",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
  {
    name: "Desserts",
    slug: "desserts",
    icon: faCookieBite,
    innerMenu: [],
    style: {
      "--fa-primary-color": "chocolate",
      "--fa-secondary-color": "burlywood",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
  {
    name: "Boissons",
    slug: "boissons",
    icon: faGlassCheers,
    innerMenu: [],
    style: {
      "--fa-primary-color": "lightsteelblue",
      "--fa-secondary-color": "darkred",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
  {
    name: "Cocktails",
    slug: "cocktails",
    icon: faCocktail,
    innerMenu: [],
    style: {
      "--fa-primary-color": "lightsteelblue",
      "--fa-secondary-color": "yellow",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
  {
    name: "Gauffres",
    slug: "gauffres",
    icon: faStroopwafel,
    innerMenu: [],
    style: {
      "--fa-primary-color": "chocolate",
      "--fa-secondary-color": "burlywood",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
  {
    name: "Crêpes",
    slug: "crepes",
    icon: faStroopwafel,
    innerMenu: [],
    style: {
      "--fa-primary-color": "burlywood",
      "--fa-secondary-color": "burlywood",
      "--fa-primary-opacity": 1,
      "--fa-secondary-opacity": 1,
    },
  },
];

export default categories;
