
export const quizQuestions_6 = {
  questions: [
    {
      question: 'What is the purpose of the state in a React component?',
      choices: [
        'To store and manage data that can change over time',
        'To define the initial structure of the component',
        'To handle side effects in the component',
        'To manage global state across all components',
      ],
      correctAnswer: 'To store and manage data that can change over time',
    },
    {
      question: 'How can you initialize state in a React class component?',
      choices: [
        'By using the `initState` method',
        'By assigning values directly to the state property',
        'By using the `state` method',
        'By calling the `useState` hook',
      ],
      correctAnswer: 'By assigning values directly to the state property',
    },
    {
      question: 'What is the equivalent of `this.setState` in a React functional component?',
      choices: [
        'The `updateState` function',
        'The `modifyState` function',
        'The `set` function',
        'The `useState` hook',
      ],
      correctAnswer: 'The `useState` hook',
    },
    {
      question: 'In a functional component, how can you declare a state variable named "count"?',
      choices: [
        'const count = this.state(0);',
        'const count = useState(0);',
        'const [count, setCount] = useState(0);',
        'const count = new State(0);',
      ],
      correctAnswer: 'const [count, setCount] = useState(0);',
    },
    {
      question: 'What is the purpose of the second element returned by the `useState` hook?',
      choices: [
        'To initialize the state variable',
        'To access the state variable',
        'To update the state variable',
        'To subscribe to state changes',
      ],
      correctAnswer: 'To update the state variable',
    },
    {
      question: 'How can you update the state in a functional component?',
      choices: [
        'By calling `this.setState`',
        'By directly modifying the state variable',
        'By using the `updateState` hook',
        'By calling the function returned by the `useState` hook',
      ],
      correctAnswer: 'By calling the function returned by the `useState` hook',
    },
    {
      question: 'What is the purpose of the `useEffect` hook in React?',
      choices: [
        'To manage and update the state of a component',
        'To handle form submissions',
        'To define the initial state of a component',
        'To perform side effects in function components',
      ],
      correctAnswer: 'To perform side effects in function components',
    },
    {
      question: 'How can you conditionally run an effect in a React functional component?',
      choices: [
        'By using the `if` statement inside the effect',
        'By providing a second argument to the `useEffect` hook',
        'By using the `condition` attribute in the effect',
        'By using the `conditionallyRun` hook',
      ],
      correctAnswer: 'By providing a second argument to the `useEffect` hook',
    },
    {
      question: 'What is the purpose of the `useCallback` hook in React?',
      choices: [
        'To manage and update the state of a component',
        'To memoize the result of a function for performance optimization',
        'To handle form submissions',
        'To create a new state variable',
      ],
      correctAnswer: 'To memoize the result of a function for performance optimization',
    },
    {
      question: 'What does the `useMemo` hook do in a React functional component?',
      choices: [
        'It creates a memoized version of the component',
        'It memoizes the result of a computation for performance optimization',
        'It manages the side effects in a functional component',
        'It updates the state variable',
      ],
      correctAnswer: 'It memoizes the result of a computation for performance optimization',
    },
  ],
}