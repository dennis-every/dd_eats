/**
 * @jest-environment jsdom
 */

// Arrange
import getMeals from './__mocks__/getMeals.js';
import showMeal from './showMeal.js';

const mealsCount = document.getElementById('mealsCount');
const cardElement = document.createElement('li');
const element = document.getElementById('meals');

describe('Count meals', () => {
  it('test', () => {
    expect(element).not.toBeNull();
  });

  xit('gets 3 meals', async () => {
    // Act
    const mealsArray = await getMeals();
    // Assert
    expect(mealsArray).toHaveLength(3);
  });

  xit('displays 3 meals in DOM', () => {
    // Arrange
    const mealsList = document.getElementById('meals');
    // Act
    showMeal(cardElement);
    // Assert
    expect(mealsList).toHaveLength(1);
  });

  xit('mealsCounter shows 3 in DOM', () => {
    // Assert
    expect(mealsCount).toHaveLength(3);
  });
});
