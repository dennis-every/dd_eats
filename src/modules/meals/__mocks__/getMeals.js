const getMeals = async () => {
  const meals = await [
    { idMeal: 1, strMeal: 'Hamburger' },
    { idMeal: 2, strMeal: 'Cheeseburger' },
    { idMeal: 3, strMeal: 'Sushi' },
  ];
  return meals;
};

export default getMeals;
