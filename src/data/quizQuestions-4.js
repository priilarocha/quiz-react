
export const quizQuestions_4 = {
  questions: [
    {
      question: 'What is the main purpose of React components?',
      choices: [
        'To define the structure of an HTML document',
        'To manage and represent the UI and behavior of a part of a web page',
        'To handle server-side logic in a web application',
        'To connect to external APIs and fetch data',
      ],
      correctAnswer: 'To manage and represent the UI and behavior of a part of a web page',
    },
    {
      question: 'How can you create a functional component in React?',
      choices: [
        'By extending the `React.Component` class',
        'By using the `createComponent` function',
        'By defining a JavaScript function that returns JSX',
        'By importing the `React.functional` module',
      ],
      correctAnswer: 'By defining a JavaScript function that returns JSX',
    },
    {
      question: 'What are props in React?',
      choices: [
        'They are Reacts internal configuration settings',
        'They are used to pass data from a parent component to a child component',
        'They are reserved keywords in JSX',
        'They are CSS classes applied to React components',
      ],
      correctAnswer: 'They are used to pass data from a parent component to a child component',
    },
    {
      question: 'How can you access the value of a prop in a functional component?',
      choices: [
        'By using the `this.props` object',
        'By passing it as an argument to the functional component',
        'By using the `props` object directly',
        'By importing the prop from the parent component',
      ],
      correctAnswer: 'By using the `props` object directly',
    },
    {
      question: 'In React, what is the purpose of the children prop?',
      choices: [
        'To represent the children of a component as a single string',
        'To define the structure of a child component',
        'To access the children of a component passed between its opening and closing tags',
        'To set the background color of a component',
      ],
      correctAnswer: 'To access the children of a component passed between its opening and closing tags',
    },
    {
      question: 'How can you pass a prop to a component in JSX?',
      choices: [
        '<MyComponent prop="value" />',
        '<MyComponent(prop="value") />',
        '<MyComponent>{prop: "value"}</MyComponent>',
        '<MyComponent>{value: "prop"}</MyComponent>',
      ],
      correctAnswer: '<MyComponent prop="value" />',
    },
    {
      question: 'What is the purpose of PropTypes in React?',
      choices: [
        'To define the type of variables used in a React component',
        'To check the type of props passed to a component at runtime',
        'To set default values for props',
        'To validate the HTML structure of a React component',
      ],
      correctAnswer: 'To check the type of props passed to a component at runtime',
    },
    {
      question: 'How can you set default values for props in a React functional component?',
      choices: [
        'By using the `default` keyword in the component definition',
        'By using the `defaultProps` object inside the component',
        'By assigning values to props directly in the JSX',
        'By using the `defaultValue` attribute in JSX',
      ],
      correctAnswer: 'By using the `defaultProps` object inside the component',
    },
    {
      question: 'What is the purpose of the key prop in React?',
      choices: [
        'To define the style of a component',
        'To uniquely identify elements in a list and optimize re-rendering',
        'To access the internal state of a component',
        'To set the initial value of a controlled input element',
      ],
      correctAnswer: 'To uniquely identify elements in a list and optimize re-rendering',
    },
    {
      question: 'How can you pass multiple props to a component in JSX?',
      choices: [
        '<MyComponent prop1="value1" prop2="value2" />',
        '<MyComponent props="value1, value2" />',
        '<MyComponent {...{ prop1: "value1", prop2: "value2" }} />',
        '<MyComponent (prop1="value1" prop2="value2") />',
      ],
      correctAnswer: '<MyComponent prop1="value1" prop2="value2" />',
    },
  ],
}