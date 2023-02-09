/**
 * @jest-environment jsdom
 */

import {
  countMeals,
  createMealsCountElement,
  showCountMeals,
} from './counter.js';

describe('count meals', () => {
  // Arrange
  const meals = [
    { idMeal: 1, strMeal: 'Hamburger' },
    { idMeal: 2, strMeal: 'Cheeseburger' },
    { idMeal: 3, strMeal: 'Sushi' },
  ];

  it('is 0 when meals array is empty', () => {
    // Arrange
    const meals = [];
    // Act
    const count = countMeals(meals);
    // Assert
    expect(count).toBe(0);
  });

  it('is 0 when meals array is not present', () => {
    // Arrange
    const meals = undefined;
    // Act
    const count = countMeals(meals);
    // Assert
    expect(count).toBe(0);
  });

  it('is 3 on when getting mocked meals', () => {
    // Act
    const count = countMeals(meals);
    // Assert
    expect(count).toBe(3);
  });

  it('creates the meal count element correctly', () => {
    // Act
    const countElement = createMealsCountElement(meals);
    // Assert
    expect(countElement.text).toBe('Meals(3)');
  });

  it('appends the meal count element correctly', () => {
    // Arrange
    const mealsCountContainer = document.createElement('li');
    mealsCountContainer.setAttribute('id', 'mealsCountContainer');
    document.body.appendChild(mealsCountContainer);
    const container = document.getElementById('mealsCountContainer');
    // Act
    showCountMeals(meals, mealsCountContainer);
    // Assert
    expect(container.innerHTML).toBe('<a href="/">Meals(3)</a>');
  });
});
