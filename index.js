import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import App from './App'
import './index.css';

// Whenever i change state or props value that time only component rerender

class App extends Component {
  state = {
    counter: 0,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  // }

  handleCounter = value => {
    this.setState(({ counter }) => ({ counter: counter + value }));
  };

  render() {
    const { name, title } = this.props;
    const { counter } = this.state;

    return (
      <>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat
          ab aliquam, perferendis cumque quia saepe ipsa excepturi unde fuga
          numquam odit possimus nobis reiciendis. Voluptatum labore totam
          sapiente? Aliquid inventore architecto iste nam blanditiis corrupti
          sapiente a aut, incidunt veritatis? Omnis molestiae, quis, aspernatur
          harum quam, aut minus debitis provident unde officia tempora
          voluptatibus. Rem doloribus natus cumque delectus possimus repudiandae
          numquam, sint ab magni temporibus sequi cum in eligendi a at eaque
          tempora dolore ducimus neque. Illum quis et praesentium dignissimos
          iste ut tempora numquam molestias eaque maiores odit totam,
          architecto, consequatur ipsum animi amet facere, similique voluptas?
        </p>
        <button type="button" onClick={() => this.handleCounter(1)}>
          +
        </button>

        <h3>{counter}</h3>
        <button type="button" onClick={() => this.handleCounter(-1)}>
          -
        </button>
      </>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ReactDOM.render(
  <App name="Yagnesh" title="Full Stack Developer" />,
  document.getElementById('root'),
);
