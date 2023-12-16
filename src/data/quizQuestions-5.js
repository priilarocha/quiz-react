
export const quizQuestions_5 = {
  questions: [
    {
      question: 'What is the Virtual DOM in React?',
      choices: [
        'An alternative to the HTML DOM',
        'A real-time representation of the HTML DOM',
        'A lightweight copy of the HTML DOM for efficient updates',
        'A component used for virtual reality applications',
      ],
      correctAnswer: 'A lightweight copy of the HTML DOM for efficient updates',
    },
    {
      question: 'How does React achieve efficient UI updates?',
      choices: [
        'By using synchronous rendering',
        'By employing a Virtual DOM for differential reconciliation',
        'By rendering the entire UI on every state change',
        'By using a single render cycle for the entire application',
      ],
      correctAnswer: 'By employing a Virtual DOM for differential reconciliation',
    },
    {
      question: 'What is the purpose of the `render` method in a React component?',
      choices: [
        'To define the initial state of the component',
        'To perform cleanup after the component unmounts',
        'To render the component content to the DOM',
        'To handle user interactions and events',
      ],
      correctAnswer: 'To render the component content to the DOM',
    },
    {
      question: 'How does React determine when to re-render a component?',
      choices: [
        'By comparing the component\'s current state with its initial state',
        'By using a timer to trigger re-renders at regular intervals',
        'By comparing the component\'s current state with its previous state',
        'By relying on the browser to automatically trigger re-renders',
      ],
      correctAnswer: 'By comparing the component\'s current state with its previous state',
    },
    {
      question: 'What is the significance of the `shouldComponentUpdate` method in a React class component?',
      choices: [
        'To define the initial state of the component',
        'To control whether the component should re-render or not',
        'To handle side effects in the component',
        'To set default props for the component',
      ],
      correctAnswer: 'To control whether the component should re-render or not',
    },
    {
      question: 'In React functional components, what hook can be used to control re-renders?',
      choices: [
        'useEffect',
        'useMemo',
        'useCallback',
        'useState',
      ],
      correctAnswer: 'useMemo',
    },
    {
      question: 'What is React reconciliation?',
      choices: [
        'A process of optimizing CSS styles',
        'The process of updating the Virtual DOM efficiently',
        'The act of rendering components in a specific order',
        'A technique for handling global state in React',
      ],
      correctAnswer: 'The process of updating the Virtual DOM efficiently',
    },
    {
      question: 'How can you force a re-render of a React functional component?',
      choices: [
        'By manually modifying the Virtual DOM',
        'By calling the `component.forceUpdate()` method',
        'By updating the component\'s state using the `setState` function',
        'By refreshing the browser window',
      ],
      correctAnswer: 'By updating the component\'s state using the `setState` function',
    },
    {
      question: 'What is the purpose of the `key` attribute when rendering lists in React?',
      choices: [
        'To define the style of each list item',
        'To access the internal state of each list item',
        'To uniquely identify elements in a list and optimize re-rendering',
        'To set the initial value of each list item',
      ],
      correctAnswer: 'To uniquely identify elements in a list and optimize re-rendering',
    },
    {
      question: 'How does React handle asynchronous rendering?',
      choices: [
        'By blocking the UI thread until rendering is complete',
        'By using callbacks for rendering',
        'By utilizing the `async/await` syntax for rendering',
        'By breaking rendering into smaller chunks and prioritizing them',
      ],
      correctAnswer: 'By breaking rendering into smaller chunks and prioritizing them',
    },
  ],
}