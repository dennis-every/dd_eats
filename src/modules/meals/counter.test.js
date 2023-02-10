/**
 * @jest-environment jsdom
 */

import getMeals from './__mocks__/getMeals.js';

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

  it('is 0 when meals element is empty', () => {
    // Arrange
    const mealsElement = document.createElement('ul');
    document.body.appendChild(mealsElement);
    // Act
    const count = countMeals();
    // Assert
    expect(count).toBe(0);
  });

  it('is 0 when meals element is not present', () => {
    // Arrange
    // const meals = undefined;
    // Act
    const count = countMeals();
    // Assert
    expect(count).toBe(0);
  });

  it('is 3 on when getting mocked meals', () => {
    // Act
    const count = getMeals.length;
    // Assert
    expect(count).toBe(3);
  });

  it('creates the meal count element correctly', () => {
    // Act
    const countElement = createMealsCountElement(meals);
    // Assert
    expect(countElement.text).toBe('Meals(0)');
  });

  it('counts the meals elements in DOM correctly', () => {
    // Arrange
    const mealsContainer = document.createElement('ul');
    mealsContainer.setAttribute('id', 'meals');
    const meal1 = document.createElement('li');
    const meal2 = document.createElement('li');
    const meal3 = document.createElement('li');
    mealsContainer.appendChild(meal1);
    mealsContainer.appendChild(meal2);
    mealsContainer.appendChild(meal3);
    document.body.appendChild(mealsContainer);
    // Act
    const count = countMeals();
    // Assert
    expect(count).toBe(3);
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
