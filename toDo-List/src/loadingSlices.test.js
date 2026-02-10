
import reducer, { loadingStarted } from "./loadingSlice";

test('loadingStarted sets completed to false', () => {
  const initialState = { value: { completed: true, successful: false } };
  const nextState = reducer(initialState, loadingStarted());
  expect(nextState.value.completed).toBe(false);
});