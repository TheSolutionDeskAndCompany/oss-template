// Add any test setup code here
// This file runs before each test file

// Example: Mocking global objects
// global.someGlobal = { ... };

// Set up any test utilities
// For example, adding custom matchers
// expect.extend({
//   toBeWithinRange(received, floor, ceiling) {
//     const pass = received >= floor && received <= ceiling;
//     if (pass) {
//       return {
//         message: () =>
//           `expected ${received} not to be within range ${floor} - ${ceiling}`,
//         pass: true,
//       };
//     } else {
//       return {
//         message: () =>
//           `expected ${received} to be within range ${floor} - ${ceiling}`,
//         pass: false,
//       };
//     }
//   },
// });

// Set test timeout to 30s
jest.setTimeout(30000);
