import React from 'react';
import { create, act } from 'react-test-renderer';
import ProfileStatusWithHooks from './ProfileStatus';

test('after creation <span> should be displayed', () => {
  const component = create(<ProfileStatusWithHooks status="test status" />);
  const root = component.root;
  let span = root.findByType('span');
  expect(span).not.toBeNull();
});

test("after creation <input> shouldn't be displayed", () => {
  const component = create(<ProfileStatusWithHooks status="test status" />);
  const root = component.root;

  expect(() => {
    let input = root.findByType('input');
  }).toThrow();
});

test('after creation <span> should contains correct status', () => {
  const component = create(<ProfileStatusWithHooks status="test status" />);
  const root = component.root;
  let span = root.findByType('span');
  expect(span.children[0]).toBe('test status');
});

/* test('input should be displayed in editMode instead of span', () => {
  const component = create(<ProfileStatusWithHooks status="test status" />)
  const root = component.root
  let span = root.findByType('span')
  span.props.onDoubleClick()
  let input = root.findByType('input')
  expect(input.props.value).toBe('test status');
}) */
