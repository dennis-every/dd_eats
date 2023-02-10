/**
 * @jest-environment jsdom
 */

import commentsCounter from './commentsCounter.js';

describe('Test1', () => {
  document.body.innerHTML = `
    <h2 id='comments__title'></h2>
    <ul id="comment__comment"></ul>
  `;
  commentsCounter();
  const title = document.getElementById('comments__title');
  const container = document.getElementById('comment__comment');
  const comment = document.createElement('li');
  comment.innerHTML = 'Comment';
  test("Checking the title when there aren't elements", () => {
    expect(title.innerHTML).toStrictEqual('Comments (0)');
  });

  test('Checking the title if I add an element', () => {
    container.appendChild(comment);
    commentsCounter();
    expect(title.innerHTML).toStrictEqual('Comments (1)');
  });
  test('Checking the title if I add more elements', () => {
    container.innerHTML += `
    <li>Comment</li>
    <li>Comment</li>
    <li>Comment</li>
    <li>Comment</li>
    <li>Comment</li>
    <li>Comment</li>
  `;
    commentsCounter();
    expect(title.innerHTML).toStrictEqual('Comments (7)');
  });
});
