/**
 * Main entry point for the application
 */

/**
 * Greets a user with a personalized message
 * @param name The name of the person to greet
 * @returns A greeting message
 */
export function greet(name: string = 'World'): string {
  return `Hello, ${name}!`;
}

// Example usage
if (require.main === module) {
  const name = process.argv[2] || 'World';
  console.log(greet(name));
}
