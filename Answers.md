# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a User interface library to create complicated user interfaces. Today’s  websites have a lot of user interaction happening which can be very taxiing on the DOM. React offloads a lot of the data that apps need to use from the DOM through their virtual DOM that interacts with the actual DOM for us. React allows the developer to tell the virtual DOM what to refer to the DOM and React will react based upon that when there is user interaction. 

1. What does it mean to think in react?

React uses components to break apart applications so they are easier to work with. React works n a hierarchy type system, with data flowing from the uppermost component down to the last component. This means React starts with a parent component that has other components branching off from it and those children can have other components branching off from them. Each component can use and pass data they receive from their parent. It is important to understand this flow in order to be able to effectively use data.

1. Describe state.

State is data held in an object and is managed the component that initialized it.

1. Describe props.

Components have props that are variables passed down from their parent component and are read only. They hold a copy of the state data which allows us to pass them down through components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside of the function being executed. There are side effects that require cleanup and others that do not.  We use the effect hook to run a side effect. We can control the side effect with the effect hook. The effect hook takes two parameters, one that is a callback function where the side effect runs. The second parameter is a dependency array which will tell when the use effect to fire. No dependency will cause the effect to fire each time state or props change. An empty array will cause the effect to fire once when the component mounts. An array with data inside will make it so that the effect will fire first when it mounts and then again only after that data is changed.
