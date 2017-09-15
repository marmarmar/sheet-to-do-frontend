import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });
});

it('should accept values in the constructor', () => {
  let task = new Task({
    Title: 'hello',
    Done: true
  });
  expect(task.Title).toEqual('hello');
  expect(task.Done).toEqual(true);
});

