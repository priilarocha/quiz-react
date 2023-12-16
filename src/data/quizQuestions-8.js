
export const quizQuestions_8 = {
  questions: [
    {
      question: 'What is the purpose of the useEffect hook in React?',
      choices: [
        'To manage and update the state of a functional component',
        'To create a new state variable in a functional component',
        'To handle asynchronous operations in a component',
        'To perform side effects after the component renders',
      ],
      correctAnswer: 'To perform side effects after the component renders',
    },
    {
      question: 'How do you import the useEffect hook in a React functional component?',
      choices: [
        'import { useEffect } from "react";',
        'import { Effect } from "react";',
        'import { use } from "react";',
        'import { Effect } from "react/hooks";',
      ],
      correctAnswer: 'import { useEffect } from "react";',
    },
    {
      question: 'In a functional component, how do you use the useEffect hook?',
      choices: [
        'useEffect(() => {}, []);',
        'useEffect(() => {});',
        'useEffect(() => {}, [dependencies]);',
        'useEffect(() => {}, [stateVariable]);',
      ],
      correctAnswer: 'useEffect(() => {}, []);',
    },
    {
      question: 'What does the second argument of the useEffect hook represent?',
      choices: [
        'The initial state value',
        'The dependencies array for the effect',
        'The return value of the effect function',
        'The update function for the effect',
      ],
      correctAnswer: 'The dependencies array for the effect',
    },
    {
      question: 'When is the effect function of the useEffect hook executed?',
      choices: [
        'Before the component renders',
        'After the component renders for the first time',
        'Only when there are state updates',
        'Whenever there are props changes',
      ],
      correctAnswer: 'After the component renders for the first time',
    },
    {
      question: 'What is the purpose of the cleanup function returned by the useEffect hook?',
      choices: [
        'To clean up resources and subscriptions created by the effect',
        'To update the component state',
        'To trigger a re-render of the component',
        'To reset the dependencies array',
      ],
      correctAnswer: 'To clean up resources and subscriptions created by the effect',
    },
    {
      question: 'How can you conditionally run an effect in a React functional component?',
      choices: [
        'By using the `if` statement inside the effect',
        'By providing a second argument to the useEffect hook',
        'By using the `condition` attribute in the effect',
        'By using the `conditionallyRun` hook',
      ],
      correctAnswer: 'By providing a second argument to the useEffect hook',
    },
    {
      question: 'What is the purpose of the empty dependencies array in the useEffect hook?',
      choices: [
        'It indicates that the effect should run only once after the initial render',
        'It signifies that the effect has no dependencies and should run on every render',
        'It prevents the effect from running',
        'It is used for specifying dependencies for the effect',
      ],
      correctAnswer: 'It indicates that the effect should run only once after the initial render',
    },
    {
      question: 'How can you perform cleanup in the useEffect hook for a component that is unmounting?',
      choices: [
        'By using the `cleanUp` hook',
        'By returning a cleanup function from the effect',
        'By calling the `unmount` method',
        'By setting the `cleanup` attribute in the effect',
      ],
      correctAnswer: 'By returning a cleanup function from the effect',
    },
    {
      question: 'In the context of the useEffect hook, what is a side effect?',
      choices: [
        'Any function used inside the effect',
        'An operation that modifies the component state',
        'Any asynchronous operation performed by the effect',
        'Any operation that affects the outside world, such as data fetching or subscriptions',
      ],
      correctAnswer: 'Any operation that affects the outside world, such as data fetching or subscriptions',
    },
  ],
}