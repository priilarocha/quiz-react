
export const quizQuestions_7 = {
  questions: [
    {
      question: 'What is the purpose of the useState hook in React?',
      choices: [
        'To manage and update the state of a functional component',
        'To define the initial state of a class component',
        'To create a new state variable in a functional component',
        'To handle asynchronous operations in a component',
      ],
      correctAnswer: 'To manage and update the state of a functional component',
    },
    {
      question: 'How do you import the useState hook in a React functional component?',
      choices: [
        'import { useState } from "react";',
        'import { State } from "react";',
        'import { use } from "react";',
        'import { State } from "react/hooks";',
      ],
      correctAnswer: 'import { useState } from "react";',
    },
    {
      question: 'In a functional component, how do you declare a state variable named "count" with an initial value of 0?',
      choices: [
        'const count = this.state(0);',
        'const count = useState(0);',
        'const [count, setCount] = useState(0);',
        'const count = new State(0);',
      ],
      correctAnswer: 'const [count, setCount] = useState(0);',
    },
    {
      question: 'What is the return value of the useState hook?',
      choices: [
        'The current state value and a function to update it',
        'The initial state value of the variable',
        'An array containing the state value and a function to update it',
        'An object with properties for the state and update function',
      ],
      correctAnswer: 'An array containing the state value and a function to update it',
    },
    {
      question: 'How can you access the current state value in a functional component?',
      choices: [
        'By using the `this.state` syntax',
        'By calling the `getState` function',
        'By using the state variable directly',
        'By invoking the `getCurrentState` function',
      ],
      correctAnswer: 'By using the state variable directly',
    },
    {
      question: 'What is the purpose of the second element returned by the useState hook?',
      choices: [
        'To initialize the state variable',
        'To access the state variable',
        'To update the state variable',
        'To subscribe to state changes',
      ],
      correctAnswer: 'To update the state variable',
    },
    {
      question: 'How do you update the state using the setCount function?',
      choices: [
        'setCount(newValue);',
        'setCount = newValue;',
        'setCount(() => newValue);',
        'setCount = () => newValue;',
      ],
      correctAnswer: 'setCount(newValue);',
    },
    {
      question: 'Can you call the useState hook conditionally in a React functional component?',
      choices: [
        'Yes, but only inside a loop',
        'Yes, but only within an if statement',
        'No, it must be called unconditionally',
        'No, it is not allowed in functional components',
      ],
      correctAnswer: 'No, it must be called unconditionally',
    },
    {
      question: 'When using multiple state variables in a functional component, what is the recommended approach?',
      choices: [
        'Use a single state variable to store all values',
        'Declare each state variable in a separate functional component',
        'Create a custom hook for managing multiple state variables',
        'Use separate useState hooks for each variable',
      ],
      correctAnswer: 'Use separate useState hooks for each variable',
    },
    {
      question: 'What does the `useEffect` hook in React do in relation to the `useState` hook?',
      choices: [
        'It updates the state based on side effects',
        'It replaces the need for the `useState` hook',
        'It performs cleanup after state updates',
        'It allows handling side effects after the component renders',
      ],
      correctAnswer: 'It allows handling side effects after the component renders',
    },
  ],
}