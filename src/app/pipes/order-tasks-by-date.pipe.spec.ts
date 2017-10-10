import { OrderTasksByDatePipe } from './order-tasks-by-date.pipe';

describe('OrderTasksByDatePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderTasksByDatePipe();
    expect(pipe).toBeTruthy();
  });
});
