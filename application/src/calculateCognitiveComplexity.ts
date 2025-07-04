import React, {ReactElement} from 'react';

export function calculateCognitiveComplexity(component: ReactElement): number {
  let complexity = 1; // Initial complexity score (base score)

  function traverse(element: ReactElement): void {
    if (element.props.children) {
      // If the component has children, iterate over them
      React.Children.forEach(element.props.children, child => {
        if (typeof child === 'string' || typeof child === 'number') {
          // Ignore text nodes
          return;
        } else if (React.isValidElement(child)) {
          // If child is a React element, traverse it recursively
          traverse(child);
        } else if (typeof child === 'function') {
          // Increment complexity for function components
          complexity++;
        }
      });
    }
  }

  traverse(component);

  return complexity;
}
