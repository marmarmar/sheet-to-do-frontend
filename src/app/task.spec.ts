import { Task } from './models/task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });
});

it('should accept values in the constructor', () => {
  const task = new Task({
    title: 'hello',
    done: true
  });
  expect(task.title).toEqual('hello');
  expect(task.done).toEqual(true);
});

