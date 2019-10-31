import React from 'react';
import Pagination from './pagination';
import { create } from 'react-test-renderer';

test('pages count is 11 but should be showed only 10', () => {
  const component = create(
    <Pagination totalCount={11} pageSize={1} portionSize={10} portion={1} />
  );
  const root = component.root;
  const li = root.findAllByType('li');
  expect(li.length).toBe(12); //10 li + 2 buttons (previous, next)
});
