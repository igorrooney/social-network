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

test('input should be displayed in editMode instead of span', () => {
  let component;
  act(() => {
    component = create(<ProfileStatusWithHooks status="test status" />);
  });
  const root = component.root;
  let span = root.findByType('span');
  act(() => {
    span.props.onDoubleClick();
  });
  let input = root.findByType('input');
  expect(input.props.value).toBe('test status');
});

// test('callback should be called', () => {   let component;   const
// mockCallback = jest.fn();   act(() => {     component = create(
// <ProfileStatusWithHooks         status="test status"
// setNewStatus={mockCallback}       />     );   });   const root =
// component.getInstance();   root.changeEditMode();
// expect(mockCallback.mock.calls.length).toBe(1); });
