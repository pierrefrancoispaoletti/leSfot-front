const categories = [
  {
    name: "Pizzas",
    slug: "pizzas",
    icon: "/assets/icons/pizza-slice.png",
    innerMenu: [],
    apiGetRequest: "/api/pizzas",
    apiPostRequest: "/api/createProduct/pizza",
  },
  {
    name: "Salades",
    slug: "salades",
    icon: "/assets/icons/salad.png",
    innerMenu: [],
    apiGetRequest: "/api/salads",
    apiPostRequest: "/api/createProduct/salad",
  },
];

export default categories;
