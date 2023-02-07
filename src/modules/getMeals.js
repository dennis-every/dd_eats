const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const getMeals = async () => {
  const request = await fetch(url);
  const { meals } = await request.json();
  return meals;
};

export default getMeals;
