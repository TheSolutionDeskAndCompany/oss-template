import { greet } from '../index';

describe('greet', () => {
  it('should return a greeting with the provided name', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should use "World" as the default name', () => {
    const result = greet();
    expect(result).toBe('Hello, World!');
  });

  it('should handle empty strings', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });
});
