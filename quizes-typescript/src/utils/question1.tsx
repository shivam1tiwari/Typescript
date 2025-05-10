
export default  [
  {
    id: 'q1',
    text: 'What is React?',
    answers: [
      { id: 'q1', option: 'A framework for building mobile apps.', isCorrect: false },
      { id: 'q1', option: 'A programming language.', isCorrect: false },
      { id: 'q1', option: 'A library for building user interfaces.', isCorrect: true },
      { id: 'q1', option: 'A templating engine for HTML.', isCorrect: false },
    ],
  },
  {
    id: 'q2',
    text: 'What is JSX?',
    answers: [
      { id: 'q2', option: 'JavaScript standard for UI development.', isCorrect: false },
      { id: 'q2', option: 'JavaScript for extensible components.', isCorrect: false },
      { id: 'q2', option: 'A templating language used in React.', isCorrect: false },
      { id: 'q2', option: 'JavaScript XML, a syntax extension for JavaScript.', isCorrect: true },
    ],
  },
  {
    id: 'q3',
    text: 'What is the purpose of the `useState` hook in React?',
    answers: [
      { id: 'q3', option: 'To manage component props.', isCorrect: false },
      { id: 'q3', option: 'To handle component lifecycle methods.', isCorrect: false },
      { id: 'q3', option: 'To update the DOM directly.', isCorrect: false },
      { id: 'q3', option: 'To manage state in functional components.', isCorrect: true },
    ],
  },
  {
    id: 'q4',
    text: 'How do you handle events in React?',
    answers: [
      { id: 'q4', option: 'By calling event methods directly on DOM elements.', isCorrect: false },
      { id: 'q4', option: 'By defining events in a global configuration file.', isCorrect: false },
      { id: 'q4', option: 'By using the `handleEvent` method on the component class.', isCorrect: false },
      { id: 'q4', option: 'By using the `onClick` attribute on elements.', isCorrect: true },
    ],
  },
  {
    id: 'q5',
    text: 'What is the Virtual DOM in React?',
    answers: [
      { id: 'q5', option: 'A tool for debugging React applications.', isCorrect: false },
      { id: 'q5', option: 'A process that interacts with the browser’s DOM directly.', isCorrect: false },
      { id: 'q5', option: 'A lightweight copy of the real DOM that React uses for faster updates.', isCorrect: true },
      { id: 'q5', option: 'A framework for handling state management in React.', isCorrect: false },
    ],
  },
  {
    id: 'q6',
    text: 'What does `ReactDOM.render()` do?',
    answers: [
      { id: 'q6', option: 'It runs component lifecycle methods.', isCorrect: false },
      { id: 'q6', option: 'It compiles JSX into JavaScript.', isCorrect: false },
      { id: 'q6', option: 'It renders a React component to the DOM.', isCorrect: true },
      { id: 'q6', option: 'It updates the React component’s state.', isCorrect: false },
    ],
  },
  {
    id: 'q7',
    text: 'What is a component in React?',
    answers: [
      { id: 'q7', option: 'A file that holds data for an app.', isCorrect: false },
      { id: 'q7', option: 'A method for routing between views.', isCorrect: false },
      { id: 'q7', option: 'A state management tool.', isCorrect: false },
      { id: 'q7', option: 'A reusable, independent building block of UI.', isCorrect: true },
    ],
  },
  {
    id: 'q8',
    text: 'How can you pass data from a parent to a child component in React?',
    answers: [
      { id: 'q8', option: 'By using state.', isCorrect: false },
      { id: 'q8', option: 'By using Redux store.', isCorrect: false },
      { id: 'q8', option: 'By using props.', isCorrect: true },
      { id: 'q8', option: 'By using global variables.', isCorrect: false },
    ],
  },
  {
    id: 'q9',
    text: 'What is the purpose of the `useEffect` hook?',
    answers: [
      { id: 'q9', option: 'To create components in functional form.', isCorrect: false },
      { id: 'q9', option: 'To pass props from parent to child components.', isCorrect: false },
      { id: 'q9', option: 'To handle side effects in functional components.', isCorrect: true },
      { id: 'q9', option: 'To update the state in class components.', isCorrect: false },
    ],
  },
  {
    id: 'q10',
    text: 'What is a "state" in React?',
    answers: [
      { id: 'q10', option: 'A set of global variables.', isCorrect: false },
      { id: 'q10', option: 'The properties passed to a React component.', isCorrect: false },
      { id: 'q10', option: 'An object that holds information about the component’s behavior and appearance.', isCorrect: true },
      { id: 'q10', option: 'The layout structure of a React application.', isCorrect: false },
    ],
  },
  {
    id: 'q11',
    text: 'What is the `key` prop used for in a list of React elements?',
    answers: [
      { id: 'q11', option: 'To determine the order of elements.', isCorrect: false },
      { id: 'q11', option: 'To handle events in the list items.', isCorrect: false },
      { id: 'q11', option: 'To uniquely identify elements to help React optimize rendering.', isCorrect: true },
      { id: 'q11', option: 'To pass dynamic values to elements.', isCorrect: false },
    ],
  },
  {
    id: 'q12',
    text: 'What is the difference between functional and class components in React?',
    answers: [
      { id: 'q12', option: 'Functional components use JSX, while class components use regular HTML.', isCorrect: false },
      { id: 'q12', option: 'There is no difference, they are interchangeable.', isCorrect: false },
      { id: 'q12', option: 'Class components are faster than functional components.', isCorrect: false },
      { id: 'q12', option: 'Functional components are simpler and do not have lifecycle methods, while class components have lifecycle methods.', isCorrect: true },
    ],
  },
  {
    id: 'q13',
    text: 'How do you make a component re-render in React?',
    answers: [
      { id: 'q13', option: 'By calling the `render` method directly.', isCorrect: false },
      { id: 'q13', option: 'By updating the state using `setState` in class components or `useState` in functional components.', isCorrect: true },
      { id: 'q13', option: 'By manipulating the DOM directly.', isCorrect: false },
      { id: 'q13', option: 'By calling the `forceUpdate` method.', isCorrect: false },
    ],
  },
  {
    id: 'q14',
    text: 'What is React Router used for?',
    answers: [
      { id: 'q14', option: 'To manage state across the app.', isCorrect: false },
      { id: 'q14', option: 'To fetch data from the server.', isCorrect: false },
      { id: 'q14', option: 'To enable navigation between different views or components in a React application.', isCorrect: true },
      { id: 'q14', option: 'To handle the UI layout.', isCorrect: false },
    ],
  },
  {
    id: 'q15',
    text: 'What is the purpose of `React.StrictMode`?',
    answers: [
      { id: 'q15', option: 'To optimize performance in production.', isCorrect: false },
      { id: 'q15', option: 'To enable error boundaries in React components.', isCorrect: false },
      { id: 'q15', option: 'To make React apps run faster.', isCorrect: false },
      { id: 'q15', option: 'To identify potential problems in the application during development.', isCorrect: true },
    ],
  },
  {
    id: 'q16',
    text: 'What is the purpose of the `useReducer` hook?',
    answers: [
      { id: 'q16', option: 'To handle side effects in functional components.', isCorrect: false },
      { id: 'q16', option: 'To manage more complex state logic in functional components.', isCorrect: true },
      { id: 'q16', option: 'To trigger re-renders of components.', isCorrect: false },
      { id: 'q16', option: 'To make API requests in functional components.', isCorrect: false },
    ],
  },
  {
    id: 'q17',
    text: 'Which of the following is a feature of React Virtual DOM?',
    answers: [
      { id: 'q17', option: 'It improves performance by reducing direct updates to the real DOM.', isCorrect: true },
      { id: 'q17', option: 'It is used for testing React components.', isCorrect: false },
      { id: 'q17', option: 'It updates the page every time the state changes.', isCorrect: false },
      { id: 'q17', option: 'It is a way to directly interact with the browser DOM.', isCorrect: false },
    ],
  },
  {
    id: 'q18',
    text: 'How do you update state in a class component?',
    answers: [
      { id: 'q18', option: 'By calling this.setState().', isCorrect: true },
      { id: 'q18', option: 'By using the useState hook.', isCorrect: false },
      { id: 'q18', option: 'By directly changing the state object.', isCorrect: false },
      { id: 'q18', option: 'By calling forceUpdate().', isCorrect: false },
    ],
  },
  {
    id: 'q19',
    text: 'What does the term "props drilling" refer to?',
    answers: [
      { id: 'q19', option: 'Passing props to sibling components.', isCorrect: false },
      { id: 'q19', option: 'The way React processes props in functional components.', isCorrect: false },
      { id: 'q19', option: 'Using props to trigger side effects in a component.', isCorrect: false },
      { id: 'q19', option: 'Passing data from a parent component to a deeply nested child component.', isCorrect: true },
    ],
  },
  {
    id: 'q20',
    text: 'Which method is used to prevent a component from re-rendering in React?',
    answers: [
      { id: 'q20', option: 'shouldComponentUpdate()', isCorrect: true },
      { id: 'q20', option: 'componentWillUpdate()', isCorrect: false },
      { id: 'q20', option: 'useMemo()', isCorrect: false },
      { id: 'q20', option: 'getSnapshotBeforeUpdate()', isCorrect: false },
    ],
  },
  {
    id: 'q21',
    text: 'What is the purpose of React Router?',
    answers: [
      { id: 'q21', option: 'To create reusable components in React.', isCorrect: false },
      { id: 'q21', option: 'To handle global state management.', isCorrect: false },
      { id: 'q21', option: 'To manage navigation and routing in single-page applications.', isCorrect: true },
      { id: 'q21', option: 'To optimize rendering performance.', isCorrect: false },
    ],
  },
  {
    id: 'q22',
    text: 'What is the difference between functional and class components in React?',
    answers: [
      { id: 'q22', option: 'Functional components are stateless, while class components can have state.', isCorrect: false },
      { id: 'q22', option: 'Class components are deprecated in React 16.', isCorrect: false },
      { id: 'q22', option: 'Functional components are simpler and use hooks for state, while class components use lifecycle methods.', isCorrect: true },
      { id: 'q22', option: 'Functional components cannot return JSX.', isCorrect: false },
    ],
  },
  {
    id: 'q23',
    text: 'Which of the following is correct for importing React in a React component?',
    answers: [
      { id: 'q23', option: 'import React from "react";', isCorrect: true },
      { id: 'q23', option: 'import ReactComponent from "react";', isCorrect: false },
      { id: 'q23', option: 'import React from "react-dom";', isCorrect: false },
      { id: 'q23', option: 'React.import();', isCorrect: false },
    ],
  },
  {
    id: 'q24',
    text: 'What is the purpose of React Fragments?',
    answers: [
      { id: 'q24', option: 'To create reusable components.', isCorrect: false },
      { id: 'q24', option: 'To style multiple elements.', isCorrect: false },
      { id: 'q24', option: 'To create global state in components.', isCorrect: false },
      { id: 'q24', option: 'To group a list of children without adding extra nodes to the DOM.', isCorrect: true },
    ],
  },
  {
    id: 'q25',
    text: 'Which lifecycle method is called before a component is unmounted?',
    answers: [
      { id: 'q25', option: 'componentDidMount()', isCorrect: false },
      { id: 'q25', option: 'render()', isCorrect: false },
      { id: 'q25', option: 'getDerivedStateFromProps()', isCorrect: false },
      { id: 'q25', option: 'componentWillUnmount()', isCorrect: true },
    ],
  },
  {
    id: 'q26',
    text: 'How do you handle forms in React?',
    answers: [
      { id: 'q26', option: 'By using only JavaScript without JSX.', isCorrect: false },
      { id: 'q26', option: 'By using uncontrolled components with refs.', isCorrect: false },
      { id: 'q26', option: 'By using the form tag directly.', isCorrect: false },
      { id: 'q26', option: 'By using controlled components where form data is handled by state.', isCorrect: true },
    ],
  },
  {
    id: 'q27',
    text: 'What does the React Context API allow you to do?',
    answers: [
      { id: 'q27', option: 'It allows you to fetch data from an API.', isCorrect: false },
      { id: 'q27', option: 'It allows you to pass data through the component tree without having to pass props manually at every level.', isCorrect: true },
      { id: 'q27', option: 'It allows you to handle side effects in a component.', isCorrect: false },
      { id: 'q27', option: 'It allows you to manage local state in a component.', isCorrect: false },
    ],
  },
  {
    id: 'q28',
    text: 'What is React Suspense used for?',
    answers: [
      { id: 'q28', option: 'To make your components more reusable.', isCorrect: false },
      { id: 'q28', option: 'To improve code readability in components.', isCorrect: false },
      { id: 'q28', option: 'To manage loading states and asynchronous rendering of components.', isCorrect: true },
      { id: 'q28', option: 'To add new components to the React tree.', isCorrect: false },
    ],
  },
  {
    id: 'q29',
    text: 'What does the `useRef` hook do in React?',
    answers: [
      { id: 'q29', option: 'It is used to store state values.', isCorrect: false },
      { id: 'q29', option: 'It creates a mutable object that persists across renders.', isCorrect: true },
      { id: 'q29', option: 'It is used for API requests.', isCorrect: false },
      { id: 'q29', option: 'It is used to handle events in components.', isCorrect: false },
    ],
  },
  {
    id: 'q30',
    text: 'Which of the following is used to trigger a re-render in React?',
    answers: [
      { id: 'q30', option: 'Changing a component\'s class name.', isCorrect: false },
      { id: 'q30', option: 'Directly manipulating the DOM.', isCorrect: false },
      { id: 'q30', option: 'Adding a new event listener.', isCorrect: false },
      { id: 'q30', option: 'Changing the state of a component.', isCorrect: true },
    ],
  },
  {
    id: 'q31',
    text: 'What is the purpose of the React.memo function?',
    answers: [
      { id: 'q31', option: 'To prevent unnecessary re-renders by memoizing the result of a component.', isCorrect: true },
      { id: 'q31', option: 'To add animations to components.', isCorrect: false },
      { id: 'q31', option: 'To handle state in functional components.', isCorrect: false },
      { id: 'q31', option: 'To make components faster by optimizing lifecycle methods.', isCorrect: false },
    ],
  },
  {
    id: 'q32',
    text: 'Which of the following is NOT a valid hook in React?',
    answers: [
      { id: 'q32', option: 'useState', isCorrect: false },
      { id: 'q32', option: 'useEffect', isCorrect: false },
      { id: 'q32', option: 'useComponentDidMount', isCorrect: true },
      { id: 'q32', option: 'useReducer', isCorrect: false },
    ],
  },
  {
    id: 'q33',
    text: 'What is the correct way to define a component in React?',
    answers: [
      { id: 'q33', option: 'function MyComponent() {}', isCorrect: true },
      { id: 'q33', option: 'class MyComponent extends React.Component {}', isCorrect: false },
      { id: 'q33', option: 'const MyComponent = React.Component;', isCorrect: false },
      { id: 'q33', option: 'function React.Component() {}', isCorrect: false },
    ],
  },
  {
    id: 'q34',
    text: 'What does the `componentDidUpdate` lifecycle method do?',
    answers: [
      { id: 'q34', option: 'It is called right before the component is mounted.', isCorrect: false },
      { id: 'q34', option: 'It is called immediately after the component’s state or props have changed.', isCorrect: true },
      { id: 'q34', option: 'It is used to initialize the component’s state.', isCorrect: false },
      { id: 'q34', option: 'It is called when the component is about to be unmounted.', isCorrect: false },
    ],
  },
  {
    id: 'q35',
    text: 'What is the purpose of `useContext` hook in React?',
    answers: [
      { id: 'q35', option: 'It manages state within a component.', isCorrect: false },
      { id: 'q35', option: 'It allows you to subscribe to context changes in a component.', isCorrect: true },
      { id: 'q35', option: 'It provides lifecycle methods for functional components.', isCorrect: false },
      { id: 'q35', option: 'It is used to update the component’s DOM directly.', isCorrect: false },
    ],
  },
  {
    id: 'q36',
    text: 'What is the main advantage of using React Hooks?',
    answers: [
      { id: 'q36', option: 'They allow for better class-based components.', isCorrect: false },
      { id: 'q36', option: 'They allow functional components to have state and lifecycle methods.', isCorrect: true },
      { id: 'q36', option: 'They improve the performance of class components.', isCorrect: false },
      { id: 'q36', option: 'They handle DOM manipulation directly.', isCorrect: false },
    ],
  },
  {
    id: 'q37',
    text: 'What is the function of the `useEffect` hook?',
    answers: [
      { id: 'q37', option: 'It updates the DOM whenever the state changes.', isCorrect: false },
      { id: 'q37', option: 'It handles side effects such as data fetching, subscriptions, or manually changing the DOM.', isCorrect: true },
      { id: 'q37', option: 'It provides a way to define event handlers in functional components.', isCorrect: false },
      { id: 'q37', option: 'It allows functional components to handle rendering logic.', isCorrect: false },
    ],
  },
  {
    id: 'q38',
    text: 'What is the best way to manage global state in React?',
    answers: [
      { id: 'q38', option: 'Using the Context API.', isCorrect: true },
      { id: 'q38', option: 'Using a global variable.', isCorrect: false },
      { id: 'q38', option: 'Passing state manually through props to every component.', isCorrect: false },
      { id: 'q38', option: 'Using the `useState` hook in every component.', isCorrect: false },
    ],
  },
  {
    id: 'q39',
    text: 'How can you optimize performance in React applications?',
    answers: [
      { id: 'q39', option: 'By avoiding the use of React.memo and useCallback.', isCorrect: false },
      { id: 'q39', option: 'By using shouldComponentUpdate() or React.memo to prevent unnecessary re-renders.', isCorrect: true },
      { id: 'q39', option: 'By increasing the component size to reduce re-rendering.', isCorrect: false },
      { id: 'q39', option: 'By using more global state.', isCorrect: false },
    ],
  },
  {
    id: 'q40',
    text: 'What is the difference between props and state in React?',
    answers: [
      { id: 'q40', option: 'Props are mutable, while state is immutable.', isCorrect: false },
      { id: 'q40', option: 'Props are passed from parent to child components, while state is managed within the component itself.', isCorrect: true },
      { id: 'q40', option: 'Props are used to manage component state.', isCorrect: false },
      { id: 'q40', option: 'State is passed to components, while props define their behavior.', isCorrect: false },
    ],
  },
  {
    id: 'q41',
    text: 'How can you make a component return a list of elements in React?',
    answers: [
      { id: 'q41', option: 'By using a loop and rendering elements in JSX.', isCorrect: false },
      { id: 'q41', option: 'By using `React.createElement()` for each element.', isCorrect: false },
      { id: 'q41', option: 'By returning an array or a fragment containing multiple elements.', isCorrect: true },
      { id: 'q41', option: 'By passing a list as a prop and mapping over it in JSX.', isCorrect: false },
    ],
  },
  {
    id: 'q42',
    text: 'What is the purpose of `React.StrictMode`?',
    answers: [
      { id: 'q42', option: 'It optimizes the performance of the application.', isCorrect: false },
      { id: 'q42', option: 'It highlights potential problems in the application during development.', isCorrect: true },
      { id: 'q42', option: 'It forces functional components to be written in ES6 syntax.', isCorrect: false },
      { id: 'q42', option: 'It manages global state in the application.', isCorrect: false },
    ],
  },
  {
    id: 'q43',
    text: 'What does the `useCallback` hook do in React?',
    answers: [
      { id: 'q43', option: 'It memoizes functions so they are not recreated on every render.', isCorrect: true },
      { id: 'q43', option: 'It manages the state in functional components.', isCorrect: false },
      { id: 'q43', option: 'It stores values across renders.', isCorrect: false },
      { id: 'q43', option: 'It enables component lifecycle methods in functional components.', isCorrect: false },
    ],
  },
  {
    id: 'q44',
    text: 'What is the purpose of the `useMemo` hook?',
    answers: [
      { id: 'q44', option: 'It prevents unnecessary re-renders of a component by memoizing the result of a function.', isCorrect: true },
      { id: 'q44', option: 'It manages state changes within functional components.', isCorrect: false },
      { id: 'q44', option: 'It allows components to persist across renders.', isCorrect: false },
      { id: 'q44', option: 'It stores DOM elements for faster re-use.', isCorrect: false },
    ],
  },
  {
    id: 'q45',
    text: 'What is the purpose of the `useLayoutEffect` hook?',
    answers: [
      { id: 'q45', option: 'It is used to modify the layout of the page during the rendering process.', isCorrect: true },
      { id: 'q45', option: 'It is used to trigger asynchronous side effects in components.', isCorrect: false },
      { id: 'q45', option: 'It is used to update the DOM after the page has been rendered.', isCorrect: false },
      { id: 'q45', option: 'It is used to handle errors in components.', isCorrect: false },
    ],
  },
  {
    id: 'q46',
    text: 'What is a React Hook?',
    answers: [
      { id: 'q46', option: 'A function that allows you to add state and lifecycle methods to functional components.', isCorrect: true },
      { id: 'q46', option: 'A method used to optimize performance in React.', isCorrect: false },
      { id: 'q46', option: 'A method used to generate components dynamically.', isCorrect: false },
      { id: 'q46', option: 'A function used to access DOM elements directly.', isCorrect: false },
    ],
  },
  {
    id: 'q47',
    text: 'How does React handle events?',
    answers: [
      { id: 'q47', option: 'By using the `addEventListener` method directly on DOM elements.', isCorrect: false },
      { id: 'q47', option: 'By binding event handlers to DOM elements within JSX.', isCorrect: true },
      { id: 'q47', option: 'By using inline `addEventListener` in components.', isCorrect: false },
      { id: 'q47', option: 'By using the `onClick` method inside the class-based components.', isCorrect: false },
    ],
  },
  {
    id: 'q48',
    text: 'What is JSX in React?',
    answers: [
      { id: 'q48', option: 'A template engine that helps to generate HTML from JavaScript objects.', isCorrect: false },
      { id: 'q48', option: 'A syntax extension that allows writing HTML inside JavaScript.', isCorrect: true },
      { id: 'q48', option: 'A JavaScript function that helps create dynamic components.', isCorrect: false },
      { id: 'q48', option: 'A method used to update the DOM directly.', isCorrect: false },
    ],
  },
  {
    id: 'q49',
    text: 'What is a PureComponent in React?',
    answers: [
      { id: 'q49', option: 'A component that only renders when its props change.', isCorrect: true },
      { id: 'q49', option: 'A component that can handle both state and props.', isCorrect: false },
      { id: 'q49', option: 'A component that only uses state for rendering.', isCorrect: false },
      { id: 'q49', option: 'A component that is rendered with no child elements.', isCorrect: false },
    ],
  },
  {
    id: 'q50',
    text: 'What is a common use case for `React.memo`?',
    answers: [
      { id: 'q50', option: 'Memoizing props in a class component.', isCorrect: false },
      { id: 'q50', option: 'Memoizing state changes.', isCorrect: false },
      { id: 'q50', option: 'Memoizing functional components to prevent unnecessary re-renders.', isCorrect: true },
      { id: 'q50', option: 'Memoizing functions inside components.', isCorrect: false },
    ],
  },
];
