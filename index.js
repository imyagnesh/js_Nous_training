import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
//import './index.css';
import './WeatherApp.css';

//ReactDOM.render(<Todo />, document.getElementById('root'));
ReactDOM.render(<WeatherApp />, document.getElementById('root'));

// Whenever i change state or props value that time only component rerender

// state
// method
// life cycle methods

// Mounting
// constructor
// 1. Define state base on props
// 2. bind methods
// 3. API call -> (logging)

// getDerivedStateFromProps
// 1. define new or update state value base on new State and prop value

// render
// 1. render html

// componentDidMount
// 1. load data on component load
// 2. to add event listner

// Updating
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate
// componentDidUpdate

// Unmount

// componentWillUnmount

// Error

// when state or prop value change component update

// class App extends Component {
//   pRef = createRef();

//   state = {
//     counter: 0,
//     hasError: false,
//   };

//   // call only once
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//   }

//   // call every time when props or state value change
//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     return {
//       ...state,
//       greet: `Hello, ${props.name}`,
//     };
//   }

//   // call only once
//   componentDidMount() {
//     console.log('componentDidMount');
//     document.addEventListener('copy', () => {
//       console.log('copied');
//     });

//     // O(1)
//     this.pRef.current.style = 'color: red';
//     // O(LogN)
//     // document.getElementById('para').style = 'color: red';
//     // O(N)
//     // document.getElementsByClassName
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate');
//     return shallowCompare(this, nextProps, nextState);
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('getSnapshotBeforeUpdate');
//     return 'hello';
//   }

//   componentDidUpdate(prevProps, prevState, snapShot) {
//     console.log('componentDidUpdate');
//     console.log(snapShot);
//   }

//   handleCounter = value => {
//     this.setState(({ counter }) => ({ counter: counter + value }));
//   };

//   static getDerivedStateFromError(error) {
//     return {
//       hasError: !!error,
//     };
//   }

//   componentDidCatch(error, info) {
//     console.log(error);
//     console.log(info);
//     // log this error on server
//   }

//   render() {
//     console.log('render');
//     const { name, title } = this.props;
//     const { counter, hasError } = this.state;

//     if (hasError) {
//       return <h2>Something went wrong</h2>;
//     }

//     return (
//       <>
//         {counter < 2 && <Child />}

//         <h1>{name}</h1>
//         <h2>{title}</h2>
//         <p ref={this.pRef}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat
//           ab aliquam, perferendis cumque quia saepe ipsa excepturi unde fuga
//           numquam odit possimus nobis reiciendis. Voluptatum labore totam
//           sapiente? Aliquid inventore architecto iste nam blanditiis corrupti
//           sapiente a aut, incidunt veritatis? Omnis molestiae, quis, aspernatur
//           harum quam, aut minus debitis provident unde officia tempora
//           voluptatibus. Rem doloribus natus cumque delectus possimus repudiandae
//           numquam, sint ab magni temporibus sequi cum in eligendi a at eaque
//           tempora dolore ducimus neque. Illum quis et praesentium dignissimos
//           iste ut tempora numquam molestias eaque maiores odit totam,
//           architecto, consequatur ipsum animi amet facere, similique voluptas?
//         </p>
//         <button type="button" onClick={() => this.handleCounter(1)}>
//           +
//         </button>

//         <h3>{counter}</h3>
//         <button type="button" onClick={() => this.handleCounter(-1)}>
//           -
//         </button>
//       </>
//     );
//   }
// }

// App.propTypes = {
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };
